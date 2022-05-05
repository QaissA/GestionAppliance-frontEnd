import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplianceHomeComponent } from './appliance-home.component';

describe('ApplianceHomeComponent', () => {
  let component: ApplianceHomeComponent;
  let fixture: ComponentFixture<ApplianceHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplianceHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplianceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
