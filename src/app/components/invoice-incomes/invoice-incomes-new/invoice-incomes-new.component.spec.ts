import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceIncomesNewComponent } from './invoice-incomes-new.component';

describe('InvoiceIncomesNewComponent', () => {
  let component: InvoiceIncomesNewComponent;
  let fixture: ComponentFixture<InvoiceIncomesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceIncomesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceIncomesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
