import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotReadComponent } from './tarot-read.component';

describe('TarotReadComponent', () => {
  let component: TarotReadComponent;
  let fixture: ComponentFixture<TarotReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarotReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarotReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
