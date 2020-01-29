import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedExpensesListComponent } from './fixed-expenses-list.component';

describe('FixedExpensesListComponent', () => {
  let component: FixedExpensesListComponent;
  let fixture: ComponentFixture<FixedExpensesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedExpensesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedExpensesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
