import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebappPortfolioComponent } from './webapp-portfolio.component';

describe('WebappPortfolioComponent', () => {
  let component: WebappPortfolioComponent;
  let fixture: ComponentFixture<WebappPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebappPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebappPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
