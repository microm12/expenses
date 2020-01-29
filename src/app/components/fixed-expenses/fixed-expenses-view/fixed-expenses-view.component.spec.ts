import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedExpensesViewComponent } from './fixed-expenses-view.component';

describe('FixedExpensesViewComponent', () => {
  let component: FixedExpensesViewComponent;
  let fixture: ComponentFixture<FixedExpensesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedExpensesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedExpensesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
