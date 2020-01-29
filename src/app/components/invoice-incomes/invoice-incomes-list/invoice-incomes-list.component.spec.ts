import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceIncomesListComponent } from './invoice-incomes-list.component';

describe('InvoiceIncomesListComponent', () => {
  let component: InvoiceIncomesListComponent;
  let fixture: ComponentFixture<InvoiceIncomesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceIncomesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceIncomesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
