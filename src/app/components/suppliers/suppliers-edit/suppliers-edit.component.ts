import { Supplier } from 'src/app/models/supplier-model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SuppliersService } from 'src/app/services/suppliers.service';

@Component({
  selector: 'app-suppliers-edit',
  templateUrl: './suppliers-edit.component.html',
  styleUrls: ['./suppliers-edit.component.scss']
})
export class SuppliersEditComponent implements OnInit {
  form: FormGroup;
  supplierId: number;
  supplier: Supplier;
  editMode: boolean;
  constructor(private route: ActivatedRoute, private router: Router, private suppliersService: SuppliersService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.supplierId = +params.id;
      this.editMode = params.id != null;
      if (this.editMode) {
        this.supplier = this.suppliersService.getSupplierById(this.supplierId);
      }
      this.initForm();
    });
  }

  initForm() {
    let name = '';
    let contactEmail = '';
    let contacts = '';

    if (this.editMode) {
      name = this.supplier.name;
      contactEmail = this.supplier.contactEmail;
      contacts = (this.supplier.contacts) ? this.supplier.contacts : '';
    }

    this.form = new FormGroup({
      name: new FormControl(name, Validators.required),
      contactEmail: new FormControl(contactEmail, [Validators.required, Validators.email]),
      contacts: new FormControl(contacts)
    });
  }

  onSubmit() {
    const newSupplier = new Supplier(
      this.form.value['name'],
      this.form.value['contactEmail'],
      this.form.value['contacts']
    );
    if (this.editMode) {
      this.suppliersService.updateSupplier(this.supplierId, newSupplier);
    } else {
      this.suppliersService.addSupplier(newSupplier);
    }
    this.router.navigate(['/suppliers']);
  }

  onCancel() {
    this.router.navigate(['/suppliers']);
  }

}
