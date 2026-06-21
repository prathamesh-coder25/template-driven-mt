import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-leave-form',
  templateUrl: './employee-leave-form.component.html',
  styleUrls: ['./employee-leave-form.component.scss']
})
export class EmployeeLeaveFormComponent implements OnInit {
@ViewChild('employeeform') employeeform!:NgForm

onSubmit(){
 if (this.employeeform.invalid) {
      this.employeeform.control.markAllAsTouched();
    } else {
      this.employeeform.reset()
    }
  }

  LeaveArr = ['Casual Leave',
    'Sick Leave',
    'Annual Leave',
    'Unpaid Leave',
    'Maternity Leave',
    'Paternity Leave']

  constructor() { }

  ngOnInit(): void {
  }

}
