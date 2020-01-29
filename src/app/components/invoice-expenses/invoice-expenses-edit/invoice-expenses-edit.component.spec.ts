import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceExpensesEditComponent } from './invoice-expenses-edit.component';

describe('InvoiceExpensesEditComponent', () => {
  let component: InvoiceExpensesEditComponent;
  let fixture: ComponentFixture<InvoiceExpensesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceExpensesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceExpensesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
