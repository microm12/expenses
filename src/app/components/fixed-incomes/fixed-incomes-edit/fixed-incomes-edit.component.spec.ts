import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedIncomesEditComponent } from './fixed-incomes-edit.component';

describe('FixedIncomesEditComponent', () => {
  let component: FixedIncomesEditComponent;
  let fixture: ComponentFixture<FixedIncomesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedIncomesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedIncomesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
