import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisarupeeComponent } from './paisarupee.component';

describe('PaisarupeeComponent', () => {
  let component: PaisarupeeComponent;
  let fixture: ComponentFixture<PaisarupeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisarupeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisarupeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
