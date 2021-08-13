import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IotDevelopmentComponent } from './iot-development.component';

describe('IotDevelopmentComponent', () => {
  let component: IotDevelopmentComponent;
  let fixture: ComponentFixture<IotDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IotDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IotDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
