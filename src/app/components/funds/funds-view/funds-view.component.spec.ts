import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsViewComponent } from './funds-view.component';

describe('FundsViewComponent', () => {
  let component: FundsViewComponent;
  let fixture: ComponentFixture<FundsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
