// registration.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
   apiUrl = 'https://localhost:7204/api/account/register';

  constructor(private http: HttpClient) {}

  registerUser(body:any)
  {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
      return this.http.post(this.apiUrl ,body,{headers:headers});
  }
  getBaseUrl() {  
    return 'https://localhost:4599/';  
 }  
 getTestMessage(): Observable<string> {  
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain'});  
    return this.http.get('api/Home/FetchValues', {responseType: 'text', headers});  
 }  
}
