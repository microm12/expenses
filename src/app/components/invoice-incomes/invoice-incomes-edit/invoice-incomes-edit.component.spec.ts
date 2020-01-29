import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceIncomesEditComponent } from './invoice-incomes-edit.component';

describe('InvoiceIncomesEditComponent', () => {
  let component: InvoiceIncomesEditComponent;
  let fixture: ComponentFixture<InvoiceIncomesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceIncomesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceIncomesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
