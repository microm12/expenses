import { Supplier } from 'src/app/models/supplier-model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
  suppliersChanged = new Subject<Supplier[]>();
  private suppliers: Supplier[] = [
    new Supplier('Mark', 'mark@test.com', 'test'),
    new Supplier('John', 'john@test.com'),
    new Supplier('Mary', 'mary@test.com', 'test3')
  ];

  constructor() { }

  getSuppliers() {
    this.suppliersChanged.next(this.suppliers);
  }

  getSupplierById(id: number): Supplier {
    for (const foundSupplier of this.suppliers) {
      if (foundSupplier.id === id) {
        return foundSupplier;
      }
    }
  }

  addSupplier(newSupplier: Supplier) {
    this.suppliers.push(newSupplier);
    this.suppliersChanged.next(this.suppliers);
  }

  updateSupplier(id: number, newSupplier: Supplier) {
    for (let supplier of this.suppliers) {
      if (supplier.id === id) {
        let index = this.suppliers.indexOf(supplier);
        this.suppliers.splice(index, 1, newSupplier);
        this.suppliersChanged.next(this.suppliers);
      }
    }
  }

  deleteSupplier(id: number) {
    for (let supplier of this.suppliers) {
      if (supplier.id === id) {
        let index = this.suppliers.indexOf(supplier);
        this.suppliers.splice(index, 1);
        this.suppliersChanged.next(this.suppliers);
      }
    }
  }
}