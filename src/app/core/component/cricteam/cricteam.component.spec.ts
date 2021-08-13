import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricteamComponent } from './cricteam.component';

describe('CricteamComponent', () => {
  let component: CricteamComponent;
  let fixture: ComponentFixture<CricteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CricteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
