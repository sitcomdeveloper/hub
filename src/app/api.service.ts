import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {Http, Headers, RequestOptionsArgs } from "@angular/http";

const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
   // user register
   userRegister(rgstruser: any): Observable<any> {
    return this.http.post<any>(API_URL + 'users/register', rgstruser);
  }
  // otp verification
  otpVerifcation(otpvrify: any): Observable<any> {
    return this.http.post<any>(API_URL + 'users/otpverification', otpvrify);
  }
  // resend otp
  resendOtp(rsendotp: any): Observable<any> {
    return this.http.post<any>(API_URL + 'users/resendotp', rsendotp);
  }
  // user login
  userLogin(usrlogin: any): Observable<any> {
    return this.http.post<any>(API_URL + 'users/login', usrlogin);
  }
  //updateuserdata
  updateuserData(updteusrdta: any): Observable<any> {
    return this.http.post<any>(API_URL + 'users/updateuserdata', updteusrdta);
  }
  // get user data
  getuserdta(): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
     });
return this.http.get<any>(API_URL + 'users/userprofile', {headers: reqHeader,});
  }
  // logout
  logout(cleardetails: any): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
     });
    return this.http.post<any>(API_URL + 'users/logout', cleardetails, {headers: reqHeader,});
  }
}
