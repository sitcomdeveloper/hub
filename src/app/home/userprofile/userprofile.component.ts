import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  signout: any;
  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
  }
  logout() {
    let t= window.sessionStorage.getItem('tokenn');
    let headers_object = new HttpHeaders({
    //  'Content-Type': 'application/json',
       'Authorization': "Bearer "+t
    });
    const cleardetails = {
      headers: headers_object
    };
    this.apiService.logout(cleardetails).subscribe(signot => {
      this.signout = signot;
      console.log('signout',signot);
    })
    this.router.navigateByUrl('/home');
  }
}
