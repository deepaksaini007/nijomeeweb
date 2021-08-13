import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCaseStudyComponent } from './client-case-study.component';

describe('ClientCaseStudyComponent', () => {
  let component: ClientCaseStudyComponent;
  let fixture: ComponentFixture<ClientCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCaseStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
