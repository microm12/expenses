import { FundsService } from 'src/app/services/funds.service';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Fund } from 'src/app/models/fund-model';
import { Subscription } from 'rxjs';
import { EditPopupComponent } from '../edit-popup/edit-popup.component';
import { MatDialog } from '@angular/material/dialog';

// declare let Plotly: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  funds: Fund[];
  private subscription: Subscription;

  tameio = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, -9],
    type: 'scatter',
  };

  exp = {
    x: [1, 2, 3, 4],
    y: [0, 0, 0, 0],
    id: [1, 2, 3, 4],
    type: 'scatter',
    mode: 'markers',
    marker: {
      color: 'rgb(219, 64, 82)',
      size: 35
    }
  };

  inc = {
    x: [1, 2, 3, 4],
    y: [0, 0, 0, 0],
    id: [1, 2, 3, 4],
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
    margin: {
      l: 20,
      r: 20,
      b: 0,
      t: 25,
      pad: 4
    },
    xaxis: {
      title: 'Date',
      autotick: false,
      side: 'top',
      range: [0.5, 15],
      fixedrange: true,
      zeroline: false
    },
    yaxis: {
      showticklabels: false,
      range: [-2, 1],
      fixedrange: true,
    },
    yaxis2: { domain: [1, 10] },
    yaxis3: { domain: [0, 1] },
    yaxis4: { domain: [0.5, 1] }
  };

  fundLayout = {
    showlegend: false,
    height: 250,
    margin: {
      l: 20,
      r: 20,
      b: 0,
      t: 25,
      pad: 4
    },
    xaxis: {
      showticklabels: false,
      autotick: false,
      side: 'top',
      range: [0.5, 15],
      fixedrange: true,
      dtick: 1,
    },
    yaxis: {
      fixedrange: true
    },
    yaxis2: { domain: [1, 10] },
    yaxis3: { domain: [0, 1] },
    yaxis4: { domain: [0.5, 1] }
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
