/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Exemplo14Component } from './exemplo14.component';

describe('Exemplo14Component', () => {
  let component: Exemplo14Component;
  let fixture: ComponentFixture<Exemplo14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemplo14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exemplo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
