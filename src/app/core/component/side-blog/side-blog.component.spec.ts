import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBlogComponent } from './side-blog.component';

describe('SideBlogComponent', () => {
  let component: SideBlogComponent;
  let fixture: ComponentFixture<SideBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
