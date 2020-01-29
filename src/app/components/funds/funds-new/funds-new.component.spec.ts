/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FundsNewComponent } from './funds-new.component';

describe('FundsNewComponent', () => {
  let component: FundsNewComponent;
  let fixture: ComponentFixture<FundsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
