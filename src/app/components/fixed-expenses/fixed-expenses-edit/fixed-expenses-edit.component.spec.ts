import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedExpensesEditComponent } from './fixed-expenses-edit.component';

describe('FixedExpensesEditComponent', () => {
  let component: FixedExpensesEditComponent;
  let fixture: ComponentFixture<FixedExpensesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedExpensesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedExpensesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
