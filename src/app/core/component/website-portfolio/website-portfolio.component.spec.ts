import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitePortfolioComponent } from './website-portfolio.component';

describe('WebsitePortfolioComponent', () => {
  let component: WebsitePortfolioComponent;
  let fixture: ComponentFixture<WebsitePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsitePortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
