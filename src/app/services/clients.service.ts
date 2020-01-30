import { Injectable } from '@angular/core';
import { Client } from '../models/client-model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private clients: Client[] = [
    new Client('Mark', 'mark@test.com', 'test'),
    new Client('John', 'john@test.com', 'test2', 'sample text'),
    new Client('Mary', 'mary@test.com', 'test3'),
    new Client('Jack', 'jack@test.com', 'test4', 'this is a test')
  ];

  constructor() { }

  getClients() {
    return this.clients;
  }

  getClientById(id: number): Client {
    for (const foundClient of this.clients) {
      if (foundClient.id === id) {
        return foundClient;
      }
    }
  }
}
