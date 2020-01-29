/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FixedIncomesNewComponent } from './fixed-incomes-new.component';

describe('FixedIncomesNewComponent', () => {
  let component: FixedIncomesNewComponent;
  let fixture: ComponentFixture<FixedIncomesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedIncomesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedIncomesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
