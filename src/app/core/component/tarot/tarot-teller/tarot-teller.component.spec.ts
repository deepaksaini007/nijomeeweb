import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotTellerComponent } from './tarot-teller.component';

describe('TarotTellerComponent', () => {
  let component: TarotTellerComponent;
  let fixture: ComponentFixture<TarotTellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarotTellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarotTellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
