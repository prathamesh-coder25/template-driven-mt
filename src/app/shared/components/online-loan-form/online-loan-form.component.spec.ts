import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineLoanFormComponent } from './online-loan-form.component';

describe('OnlineLoanFormComponent', () => {
  let component: OnlineLoanFormComponent;
  let fixture: ComponentFixture<OnlineLoanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineLoanFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineLoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
