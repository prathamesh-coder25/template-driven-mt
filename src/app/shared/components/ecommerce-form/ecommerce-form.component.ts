import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ecommerce-form',
  templateUrl: './ecommerce-form.component.html',
  styleUrls: ['./ecommerce-form.component.scss']
})
export class EcommerceFormComponent implements OnInit {
@ViewChild('ecommerce') ecommerce!:NgForm

ratingArr=[1,2,3,4,5]
  onSubmit(){
    if(this.ecommerce.invalid){
      this.ecommerce.control.markAllAsTouched()
    }else{
      this.ecommerce.reset()
    }

  }
  constructor() { }

  ngOnInit(): void {
  }

}
