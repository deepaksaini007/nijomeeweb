import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyReelComponent } from './money-reel.component';

describe('MoneyReelComponent', () => {
  let component: MoneyReelComponent;
  let fixture: ComponentFixture<MoneyReelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyReelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyReelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
