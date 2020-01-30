import { Supplier } from 'src/app/models/supplier-model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SuppliersService } from 'src/app/services/suppliers.service';

@Component({
  selector: 'app-suppliers-view',
  templateUrl: './suppliers-view.component.html',
  styleUrls: ['./suppliers-view.component.scss']
})
export class SuppliersViewComponent implements OnInit {
  supplier: Supplier;
  supplierId: number;
  constructor(private router: Router, private route: ActivatedRoute, private suppliersService: SuppliersService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.supplierId = +params.id;
      this.supplier = this.suppliersService.getSupplierById(this.supplierId);
    });
  }

}
