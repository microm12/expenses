import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceIncomesViewComponent } from './invoice-incomes-view.component';

describe('InvoiceIncomesViewComponent', () => {
  let component: InvoiceIncomesViewComponent;
  let fixture: ComponentFixture<InvoiceIncomesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceIncomesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceIncomesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
