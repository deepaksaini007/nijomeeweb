import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanpemoneyComponent } from './loanpemoney.component';

describe('LoanpemoneyComponent', () => {
  let component: LoanpemoneyComponent;
  let fixture: ComponentFixture<LoanpemoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanpemoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanpemoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
