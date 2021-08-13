import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NijomeeBlogComponent } from './nijomee-blog.component';

describe('NijomeeBlogComponent', () => {
  let component: NijomeeBlogComponent;
  let fixture: ComponentFixture<NijomeeBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NijomeeBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NijomeeBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
