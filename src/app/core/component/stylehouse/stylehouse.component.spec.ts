import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylehouseComponent } from './stylehouse.component';

describe('StylehouseComponent', () => {
  let component: StylehouseComponent;
  let fixture: ComponentFixture<StylehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
