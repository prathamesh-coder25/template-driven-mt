import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
 @ViewChild('studentform') studentform!:NgForm
   GenderArr=["Male", "Female", "Other"]
   CourseArr=['Angular Developer', 'NodeJs Developer', 'FullStack Developer']

  onSubmit(){
    if(this.studentform.invalid){
      this.studentform.control.markAllAsTouched()
    }else{
      this.studentform.reset
    }
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
