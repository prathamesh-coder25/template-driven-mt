import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentFormComponent } from './shared/components/student-form/student-form.component';
import { FormsModule } from '@angular/forms';
import { EmployeeLeaveFormComponent } from './shared/components/employee-leave-form/employee-leave-form.component';
import { JobApplicationFormComponent } from './shared/components/job-application-form/job-application-form.component';
import { OnlineLoanFormComponent } from './shared/components/online-loan-form/online-loan-form.component';
import { EcommerceFormComponent } from './shared/components/ecommerce-form/ecommerce-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    EmployeeLeaveFormComponent,
    JobApplicationFormComponent,
    OnlineLoanFormComponent,
    EcommerceFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
