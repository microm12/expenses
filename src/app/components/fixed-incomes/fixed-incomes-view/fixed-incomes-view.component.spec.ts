import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedIncomesViewComponent } from './fixed-incomes-view.component';

describe('FixedIncomesViewComponent', () => {
  let component: FixedIncomesViewComponent;
  let fixture: ComponentFixture<FixedIncomesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedIncomesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedIncomesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
