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
  parsedftecheddata: any;
  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.parsedftecheddata = JSON.parse(sessionStorage.getItem('fetchingDetails'))
    // console.log('getfetchData', this.parsedftecheddata);
  }
  logout() {
    const cleardetails = {
    };
    this.apiService.logout(cleardetails).subscribe(signot => {
      this.signout = signot;
      // console.log('signout', signot);
      setTimeout(() => {
        this.router.navigateByUrl('/home');
      },
        1000);
    })
    window.sessionStorage.clear();
  }
}
