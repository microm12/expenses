import { Supplier } from 'src/app/models/supplier-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
  private suppliers: Supplier[] = [
    new Supplier('Mark', 'mark@test.com', 'test'),
    new Supplier('John', 'john@test.com'),
    new Supplier('Mary', 'mary@test.com', 'test3')
  ];

  constructor() { }

  getSuppliers() {
    return this.suppliers;
  }

  getSupplierById(id: number): Supplier {
    for (const foundSupplier of this.suppliers) {
      if (foundSupplier.id === id) {
        return foundSupplier;
      }
    }
  }
}
