import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-online-loan-form',
  templateUrl: './online-loan-form.component.html',
  styleUrls: ['./online-loan-form.component.scss']
})
export class OnlineLoanFormComponent implements OnInit {
 @ViewChild('loanform') loanform !: NgForm

   onSubmit(){
    if(this.loanform.invalid){
      this.loanform.control.markAllAsTouched()
    }else{
      this.loanform.reset()
    }
   }
  constructor() { }

  ngOnInit(): void {
  }

}
