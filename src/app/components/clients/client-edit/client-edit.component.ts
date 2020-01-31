import { ClientsService } from 'src/app/services/clients.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from './../../../models/client-model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {
  form: FormGroup;
  clientId: number;
  client: Client;
  editMode: boolean;
  constructor(private route: ActivatedRoute, private router: Router, private clientsService: ClientsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.clientId = +params.id;
      this.editMode = params.id != null;
      if (this.editMode) {
        this.client = this.clientsService.getClientById(this.clientId);
      }
      this.initForm();
    });
  }

  initForm() {
    let name = '';
    let accEmail = '';
    let invoiceData = '';
    let contacts = '';

    if (this.editMode) {
      name = this.client.name;
      accEmail = this.client.accEmail;
      invoiceData = this.client.invoiceData;
      contacts = (this.client.contacts) ? this.client.contacts : '';
    }

    this.form = new FormGroup({
      name: new FormControl(name, Validators.required),
      accEmail: new FormControl(accEmail, [Validators.required, Validators.email]),
      invoiceData: new FormControl(invoiceData, Validators.required),
      contacts: new FormControl(contacts)
    });
  }

  onSubmit() {
    const newClient = new Client(
      this.form.value['name'],
      this.form.value['accEmail'],
      this.form.value['invoiceData'],
      this.form.value['contacts']
    );
    if (this.editMode) {
      this.clientsService.updateClient(this.clientId, newClient);
    } else {
      this.clientsService.addClient(newClient);
    }
    this.router.navigate(['/clients']);
  }

  onCancel() {
    this.router.navigate(['/clients']);
  }

}
