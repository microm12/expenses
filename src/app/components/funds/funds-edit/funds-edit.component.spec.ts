import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsEditComponent } from './funds-edit.component';

describe('FundsEditComponent', () => {
  let component: FundsEditComponent;
  let fixture: ComponentFixture<FundsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
