// import { Injectable } from '@angular/core';

// declare const gapi: any; // Declare the gapi object

// @Injectable({
//   providedIn: 'root'
// })
// export class GoogleAuthService {
//   private auth2: any; // GoogleAuth object

//   constructor() {
//     gapi.load('auth2', () => {
//       gapi.auth2.init({
//         client_id: 'YOUR_GOOGLE_CLIENT_ID',
//         scope: 'profile email'
//       }).then((auth2: any) => {
//         this.auth2 = auth2;
//       }).catch((error: any) => {
//         console.error('Google Auth2 initialization failed:', error);
//       });
//     });
//   }

//   signInWithGoogle(): Promise<any> {
//     return new Promise((resolve, reject) => {
//       this.auth2.signIn().then((googleUser: any) => {
//         resolve(googleUser);
//       }).catch((error: any) => {
//         reject(error);
//       });
//     });
//   }
// }
