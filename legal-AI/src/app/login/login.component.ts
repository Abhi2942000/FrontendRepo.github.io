import { Component } from '@angular/core';
//import { GoogleAuthService } from '../google-auth.service';
interface GoogleUser {
  getAuthResponse(): { id_token: string };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // constructor(private googleAuthService: GoogleAuthService) {}

  // onGoogleSignIn(): void {
  //   this.googleAuthService.signInWithGoogle().then((googleUser: gapi.auth2.GoogleUser) => {
  //     const idToken = googleUser.getAuthResponse().id_token;
  //     // Call your backend API here and send the idToken
  //     this.sendTokenToBackend(idToken);
  //   }).catch((error: any) => {
  //     console.error('Google Sign-In Error:', error);
  //   });
  // }

  private sendTokenToBackend(idToken: string): void {
    
  }
 
  password: string = '';
  passwordFieldType: string = 'password';

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  login()
{
  
}
}

