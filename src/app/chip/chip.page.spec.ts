import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import {  ChipPage } from './chip.page';

describe('ListPage', () => {
  let component: ChipPage;
  let fixture: ComponentFixture<ChipPage>;
  let chipPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(ChipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    chipPage = fixture.nativeElement;
    const items = chipPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
