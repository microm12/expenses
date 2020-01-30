import { ClientsService } from 'src/app/services/clients.service';
import { Client } from './../../../models/client-model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {
  clientId: number;
  client: Client;
  constructor(private router: Router, private route: ActivatedRoute, private clientService: ClientsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.clientId = +params.id;
      this.client = this.clientService.getClientById(this.clientId);
    });
  }

}
