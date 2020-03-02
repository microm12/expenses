import { DateUtilities } from './../../../models/misc/dateUtilities';
import { DashboardDataService } from './../../../services/dashboard-data.service';
import { FundsService } from 'src/app/services/funds.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Fund } from 'src/app/models/fund-model';
import { Subscription } from 'rxjs';
import { EditPopupComponent } from '../edit-popup/edit-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  funds: Fund[];
  range: string[] = new DateUtilities().initRange();
  incomeDates: string[];
  expenseDates: string[];
  overviewData: Array<any>;
  fundData: Array<any> = [];
  private subscription: Subscription;

  exp = {
    x: [],
    y: [0, 0, 0, 0],
    type: 'scatter',
    mode: 'markers',
    marker: {
      color: 'rgb(219, 64, 82)',
      size: 35
    }
  };

  inc = {
    x: [],
    y: [0, 0, 0, 0],
    type: 'scatter',
    mode: 'markers',
    marker: {
      color: 'rgb(51, 153, 255)',
      size: 10
    }
  };

  overviewLayout = {
    showlegend: false,
    height: 120,
    hovermode: 'closest',
    margin: {
      l: 30,
      r: 20,
      b: 0,
      t: 55,
      pad: 0
    },
    xaxis: {
      autotick: false,
      side: 'top',
      range: this.range,
      fixedrange: true,
      zeroline: false
    },
    yaxis: {
      showticklabels: false,
      range: [-2, 1],
      fixedrange: true,
    },
  };

  fundLayout = {
    showlegend: false,
    height: 250,
    margin: {
      l: 30,
      r: 20,
      b: 5,
      t: 30,
      pad: 0
    },
    xaxis: {
      showticklabels: false,
      autotick: false,
      side: 'top',
      range: this.range,
      fixedrange: true,
    },
    yaxis: {
      fixedrange: true,
      autotick: true
    },
  };

  constructor(private fundsService: FundsService,
    public dialog: MatDialog,
    private dashboardDataService: DashboardDataService) { }

  ngOnInit(): void {
    this.subscription = this.fundsService.fundsChanged.subscribe(funds => {
      this.funds = funds;
    });
    this.fundsService.getFunds();
    this.populateData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClick(e) {
    const dialogRef = this.dialog.open(EditPopupComponent, {
      data: { date: e.points[0].x },
      width: '95%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.populateData();
      }
    });
  }

  populateData() {
    const incomes = this.dashboardDataService.getFundIncomes();
    this.incomeDates = incomes.map(income => income.transaction.date);
    this.inc.x = this.incomeDates;
    const expenses = this.dashboardDataService.getFundExpenses();
    this.expenseDates = expenses.map(expense => expense.transaction.date);
    this.exp.x = this.expenseDates;
    this.overviewData = [this.exp, this.inc];
    const tempData = [];
    this.funds.map(fund => {
      const fundIncomes = this.dashboardDataService.getFundIncomes(null, fund.id);
      const fundExpenses = this.dashboardDataService.getFundExpenses(null, fund.id);

      const fundIncomeData = fundIncomes.map(income => {
        return {
          date: income.transaction.date,
          amount: income.transaction.accountTransactions.map(trans => {
            if (trans.fundId === fund.id) {
              return trans.amount;
            }
          })
        };
      });
      const fundExpenseData = fundExpenses.map(expense => {
        return {
          date: expense.transaction.date,
          amount: expense.transaction.accountTransactions.map(trans => {
            if (trans.fundId === fund.id) {
              return -trans.amount;
            }
          })
        };
      });

      const tameio = {
        x: null,
        y: null,
        mode: 'lines+markers',
      };

      const transData = fundIncomeData.concat(fundExpenseData).sort((a, b) => a.date.localeCompare(b.date));
      const filteredData = transData.filter(data => data.amount.filter(transacData => transacData !== undefined));
      const dates = filteredData.map(data => data.date);
      const uniqueDates = dates.filter((item, pos) => dates.indexOf(item) === pos);
      const uniqueAmounts = [];
      const unDates = [];
      uniqueDates.map(date => {
        let sum = 0;
        let found = false;
        filteredData.map(data => {
          if ((date === data.date)) {
            data.amount.map(innerData => {
              if (innerData !== undefined) {
                sum += innerData;
                found = true;
              }
            });
          }
        });
        if (found) {
          unDates.push(date);
          uniqueAmounts.push(sum);
        }
      });

      tameio.x = unDates;
      tameio.y = uniqueAmounts;

      tempData.push([tameio]);
    });

    this.fundData = tempData;
  }

  updateGraph(mode) {
    this.range = new DateUtilities().calcRange(this.range, mode);
    this.overviewLayout = {
      showlegend: false,
      height: 120,
      hovermode: 'closest',
      margin: this.overviewLayout.margin,
      xaxis: {
        autotick: false,
        side: 'top',
        range: this.range,
        fixedrange: true,
        zeroline: false
      },
      yaxis: this.overviewLayout.yaxis
    };

    this.fundLayout = {
      showlegend: false,
      height: 250,
      margin: this.fundLayout.margin,
      xaxis: {
        showticklabels: false,
        autotick: false,
        side: 'top',
        range: this.range,
        fixedrange: true,
      },
      yaxis: this.fundLayout.yaxis
    };
  }
}

