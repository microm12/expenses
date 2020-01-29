import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceExpensesNewComponent } from './invoice-expenses-new.component';

describe('InvoiceExpensesNewComponent', () => {
  let component: InvoiceExpensesNewComponent;
  let fixture: ComponentFixture<InvoiceExpensesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceExpensesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceExpensesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
