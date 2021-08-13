import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeHoroComponent } from './free-horo.component';

describe('FreeHoroComponent', () => {
  let component: FreeHoroComponent;
  let fixture: ComponentFixture<FreeHoroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeHoroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeHoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
