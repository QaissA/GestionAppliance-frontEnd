import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliancetableComponent } from './appliancetable.component';

describe('AppliancetableComponent', () => {
  let component: AppliancetableComponent;
  let fixture: ComponentFixture<AppliancetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliancetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliancetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
