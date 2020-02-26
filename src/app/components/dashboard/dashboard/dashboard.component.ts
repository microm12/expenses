import { DashboardDataService } from './../../../services/dashboard-data.service';
import { DateRangeService } from './../../../services/misc/date-range.service';
import { FundsService } from 'src/app/services/funds.service';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
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
  range: string[] = this.dateRangeService.initRange();
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
      b: 0,
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
    },
  };

  constructor(private fundsService: FundsService,
    public dialog: MatDialog,
    private dateRangeService: DateRangeService,
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
    const incomes = this.dashboardDataService.getFundIcomes();
    this.incomeDates = incomes.map(income => income.transaction.date);
    this.inc.x = this.incomeDates;
    const expenses = this.dashboardDataService.getFundExpenses();
    this.expenseDates = expenses.map(expense => expense.transaction.date);
    this.exp.x = this.expenseDates;
    this.overviewData = [this.exp, this.inc];
    this.funds.map(fund => {
      const fundIncomes = this.dashboardDataService.getFundIcomes(null, fund.id);
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
        type: 'line',
      };

      const transData = fundIncomeData.concat(fundExpenseData).sort((a, b) => a.date.localeCompare(b.date));
      const dates = transData.map(data => data.date);
      const uniqueDates = dates.filter((item, pos) => dates.indexOf(item) === pos);
      const uniqueAmounts = [];
      uniqueDates.map(date => {
        let sum = 0;
        transData.map(data => {
          if (date === data.date) {
            sum += data.amount[0];
          }
        });
        uniqueAmounts.push(sum);
      });

      tameio.x = uniqueDates;
      tameio.y = uniqueAmounts;

      this.fundData.push([tameio]);
    });
  }

  updateGraph(mode) {
    this.range = this.dateRangeService.calcRange(this.range, mode);
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

