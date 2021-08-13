import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyLiveComponent } from './sky-live.component';

describe('SkyLiveComponent', () => {
  let component: SkyLiveComponent;
  let fixture: ComponentFixture<SkyLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyLiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
