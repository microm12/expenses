import { Component, OnInit } from '@angular/core';
import { FixedIncome } from 'src/app/models/fixed-income-model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FixedIncomesService } from 'src/app/services/fixed-incomes.service';

@Component({
  selector: 'app-fixed-incomes-view',
  templateUrl: './fixed-incomes-view.component.html',
  styleUrls: ['./fixed-incomes-view.component.scss']
})
export class FixedIncomesViewComponent implements OnInit {
  fixedIncome: FixedIncome;
  fixedIncomeId: number;
  constructor(private router: Router, private route: ActivatedRoute, private fixedIncomesService: FixedIncomesService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.fixedIncomeId = +params.id;
      this.fixedIncome = this.fixedIncomesService.getFixedIncomeById(this.fixedIncomeId);
    });
  }

}
