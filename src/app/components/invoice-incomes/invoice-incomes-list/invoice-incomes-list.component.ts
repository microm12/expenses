import { InvoiceIncomesService } from './../../../services/invoice-incomes.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { InvoiceIncome } from 'src/app/models/invoice-income-model';

@Component({
  selector: 'app-invoice-incomes-list',
  templateUrl: './invoice-incomes-list.component.html',
  styleUrls: ['./invoice-incomes-list.component.scss']
})
export class InvoiceIncomesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'customerId', 'fundId', 'amount', 'payoutPeriod', 'edit', 'delete'];
  dataset: MatTableDataSource<InvoiceIncome>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private invoiceIncomesService: InvoiceIncomesService) {
  }

  ngOnInit() {
    const invoiceIncomes = this.invoiceIncomesService.getInvoiceIncomes();
    this.dataset = new MatTableDataSource<InvoiceIncome>(invoiceIncomes);
    this.dataset.paginator = this.paginator;
  }
}
