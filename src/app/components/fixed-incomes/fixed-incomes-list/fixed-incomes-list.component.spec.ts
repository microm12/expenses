import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedIncomesListComponent } from './fixed-incomes-list.component';

describe('FixedIncomesListComponent', () => {
  let component: FixedIncomesListComponent;
  let fixture: ComponentFixture<FixedIncomesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedIncomesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedIncomesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
