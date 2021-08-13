import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyzerComponent } from './flyzer.component';

describe('FlyzerComponent', () => {
  let component: FlyzerComponent;
  let fixture: ComponentFixture<FlyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
