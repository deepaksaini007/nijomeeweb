import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebBlogComponent } from './web-blog.component';

describe('WebBlogComponent', () => {
  let component: WebBlogComponent;
  let fixture: ComponentFixture<WebBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
