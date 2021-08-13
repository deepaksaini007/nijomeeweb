import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvergreenkartComponent } from './evergreenkart.component';

describe('EvergreenkartComponent', () => {
  let component: EvergreenkartComponent;
  let fixture: ComponentFixture<EvergreenkartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvergreenkartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvergreenkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
