import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormApplianceUpdateComponent } from './form-appliance-update.component';

describe('FormApplianceUpdateComponent', () => {
  let component: FormApplianceUpdateComponent;
  let fixture: ComponentFixture<FormApplianceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormApplianceUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormApplianceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
