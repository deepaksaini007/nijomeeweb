import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditassistComponent } from './auditassist.component';

describe('AuditassistComponent', () => {
  let component: AuditassistComponent;
  let fixture: ComponentFixture<AuditassistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditassistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditassistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
