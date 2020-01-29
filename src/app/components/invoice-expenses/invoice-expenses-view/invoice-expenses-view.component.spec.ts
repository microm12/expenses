import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceExpensesViewComponent } from './invoice-expenses-view.component';

describe('InvoiceExpensesViewComponent', () => {
  let component: InvoiceExpensesViewComponent;
  let fixture: ComponentFixture<InvoiceExpensesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceExpensesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceExpensesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
