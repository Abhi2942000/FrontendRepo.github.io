import { Component } from '@angular/core';
import { AccountService } from  './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'legal-AI';
  
  constructor(private accountService: AccountService) { }
  
  register() {
    // Get registration form data
    const registrationData = { username: 'example', password: 'password' };
    
    // Call the backend API for registration]
    // Call the backend API for registration
    this.accountService['register'](registrationData).subscribe(
      () => {
        // Registration successful, perform any necessary actions
      },
      (error: any) => {
        // Handle registration error
      }
    );
  }
  
  login() {
    // Get login form data
    const loginData = { username: 'example', password: 'password' };
    
    // Call the backend API for login
    // Call the backend API for login
    this.accountService['login'](loginData).subscribe(
      () => {
        // Login successful, perform any necessary actions
      },
      (error: any) => {
        
        // Handle login error
      }
    );
  }
}
