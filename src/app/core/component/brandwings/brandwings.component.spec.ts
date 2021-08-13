import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandwingsComponent } from './brandwings.component';

describe('BrandwingsComponent', () => {
  let component: BrandwingsComponent;
  let fixture: ComponentFixture<BrandwingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandwingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandwingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
