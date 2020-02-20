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
  private subscription: Subscription;

  tameio = {
    x: ['2015-05-18', '2015-06-25', '2015-07-31', '2015-08-01'],
    y: [16, 5, 11, -9],
    type: 'scatter',
  };

  exp = {
    x: ['2015-05-18', '2015-06-25', '2015-07-31', '2015-08-01'],
    y: [0, 0, 0, 0],
    type: 'scatter',
    mode: 'markers',
    marker: {
      color: 'rgb(219, 64, 82)',
      size: 35
    }
  };

  inc = {
    x: ['2015-05-18', '2015-06-25', '2015-07-31', '2015-08-01'],
    y: [0, 0, 0, 0],
    type: 'scatter',
    mode: 'markers',
    marker: {
      color: 'rgb(51, 153, 255)',
      size: 10
    }
  };

  data1 = [this.exp, this.inc];
  data2 = [this.tameio];


  overviewLayout = {
    showlegend: false,
    height: 120,
    hovermode: 'closest',
    margin: {
      l: 20,
      r: 20,
      b: 0,
      t: 55,
      pad: 4
    },
    xaxis: {
      autotick: false,
      side: 'top',
      range: ['2015-05-17', '2015-08-02'],
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
      l: 20,
      r: 20,
      b: 0,
      t: 30,
      pad: 4
    },
    xaxis: {
      showticklabels: false,
      autotick: false,
      side: 'top',
      range: ['2015-05-17', '2015-08-02'],
      fixedrange: true,
    },
    yaxis: {
      fixedrange: true,
    },
  };

  constructor(private fundsService: FundsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscription = this.fundsService.fundsChanged.subscribe(funds => {
      this.funds = funds;
    });
    this.fundsService.getFunds();
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

      }
    });
  }



}
