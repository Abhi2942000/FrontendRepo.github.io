import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

}
