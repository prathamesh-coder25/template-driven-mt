import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaveFormComponent } from './employee-leave-form.component';

describe('EmployeeLeaveFormComponent', () => {
  let component: EmployeeLeaveFormComponent;
  let fixture: ComponentFixture<EmployeeLeaveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLeaveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLeaveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
