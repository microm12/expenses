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

  getSupplierIds() {
    const ids = this.suppliers.map(supplier => {
      return supplier.id;
    });
    return ids;
  }

  addSupplier(newSupplier: Supplier) {
    this.suppliers.push(newSupplier);
    this.suppliersChanged.next(this.suppliers);
  }

  updateSupplier(id: number, newSupplier: Supplier) {
    this.suppliers.map((supplier, index) => {
      if (supplier.id === id) {
        this.suppliers.splice(index, 1, newSupplier);
        this.suppliersChanged.next(this.suppliers);
      }
    });
  }

  deleteSupplier(id: number) {
    this.suppliers.map((supplier, index) => {
      if (supplier.id === id) {
        this.suppliers.splice(index, 1);
        this.suppliersChanged.next(this.suppliers);
      }
    });
  }
}
