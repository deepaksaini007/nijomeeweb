import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrobazarComponent } from './astrobazar.component';

describe('AstrobazarComponent', () => {
  let component: AstrobazarComponent;
  let fixture: ComponentFixture<AstrobazarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstrobazarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstrobazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
