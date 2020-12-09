// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = sessionStorage.token; // you probably want to store it in localStorage or something
//     if (!token) {
//       return next.handle(req);
//     }
//     const req1 = req.clone({
//       headers: req.headers.set('Authorization', `Bearer ${token}`),
//     });

//     return next.handle(req1);
//   }

// }

import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (window.sessionStorage.getItem('tokenn') != null) {
      const clonedReq = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + window.sessionStorage.getItem('tokenn'))
      });
      return next.handle(clonedReq);
    }
    // else {

    //   catchError((err: HttpErrorResponse) => {
    //     if (err.status === 401) {
    //       alert('Your session is expired!!.Please login again to continue');
    //       // this.router.navigateByUrl('login', { queryParams: { returnUrl: req.url } });
    //       window.sessionStorage.clear;
    //     }
    //     return throwError(err);
    //   })
    //   // this.router.navigateByUrl('login');
    // }
  }

}
