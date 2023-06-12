import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { RegistrationService } from '../registration.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[RegistrationService]
})

export class RegistrationComponent implements OnInit {
[x: string]: any;
  signupForm:any = FormGroup;
  user:any={};

  constructor(private formBuilder: FormBuilder,private registrationService: RegistrationService) {
    
    
  }
  
  ngOnInit(): void {
    // this.signupForm = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', Validators.required],
    //   designation: ['', Validators.required]
    // });
    

  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get designation() {
    return this.signupForm.get('designation');
  }

  signup(): void {
    debugger;
    
    // // if(!this.signupForm.valid){
    // //   return;
    // // }
    // else{
      this.registrationService.registerUser(this.user).subscribe(res => {
        debugger;
        console.log(res);
        })
    //}
    // if (this.signupForm.valid) {
    //   // Perform the signup logic here
    //   console.log('Registration successful!');
     
    // } 
    // else if (this.signupForm.valid == null) {
    //   console.log('Please enter EmailId & Password');
    // }

    // else{
    //   console.log('Invalid form');
    // }
  }
}
