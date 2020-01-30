import { SuppliersService } from './../../../services/suppliers.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Supplier } from 'src/app/models/supplier-model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.scss']
})
export class SuppliersListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'contactEmail', 'edit', 'delete'];
  dataset: MatTableDataSource<Supplier>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private suppliersService: SuppliersService) { }

  ngOnInit() {
    const suppliers = this.suppliersService.getSuppliers();
    this.dataset = new MatTableDataSource<Supplier>(suppliers);
    this.dataset.paginator = this.paginator;
  }

}
