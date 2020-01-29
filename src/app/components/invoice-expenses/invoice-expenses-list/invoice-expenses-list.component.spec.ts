import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceExpensesListComponent } from './invoice-expenses-list.component';

describe('InvoiceExpensesListComponent', () => {
  let component: InvoiceExpensesListComponent;
  let fixture: ComponentFixture<InvoiceExpensesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceExpensesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceExpensesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
