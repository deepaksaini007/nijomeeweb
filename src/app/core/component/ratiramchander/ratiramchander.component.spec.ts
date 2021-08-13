import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatiramchanderComponent } from './ratiramchander.component';

describe('RatiramchanderComponent', () => {
  let component: RatiramchanderComponent;
  let fixture: ComponentFixture<RatiramchanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatiramchanderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatiramchanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
