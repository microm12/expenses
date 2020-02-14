import { Component, OnInit } from '@angular/core';
import { FixedExpense } from 'src/app/models/fixed-expense-model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FixedExpensesService } from 'src/app/services/fixed-expenses.service';

@Component({
  selector: 'app-fixed-expenses-view',
  templateUrl: './fixed-expenses-view.component.html',
  styleUrls: ['./fixed-expenses-view.component.scss']
})
export class FixedExpensesViewComponent implements OnInit {
  fixedExpense: FixedExpense;
  fixedExpenseId: number;
  constructor(private router: Router, private route: ActivatedRoute, private fixedExpensesService: FixedExpensesService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.fixedExpenseId = +params.id;
      this.fixedExpense = this.fixedExpensesService.getFixedExpenseById(this.fixedExpenseId);
    });
  }

}
