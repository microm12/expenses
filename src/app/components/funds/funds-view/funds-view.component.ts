import { Fund } from './../../../models/fund-model';
import { Component, OnInit } from '@angular/core';
import { FundsService } from 'src/app/services/funds.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-funds-view',
  templateUrl: './funds-view.component.html',
  styleUrls: ['./funds-view.component.scss']
})
export class FundsViewComponent implements OnInit {
  fundId: number;
  fund: Fund;
  constructor(private router: Router, private route: ActivatedRoute, private fundsService: FundsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.fundId = +params.id;
      this.fund = this.fundsService.getClientById(this.fundId);
    });
  }

}
