import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
@Component({
  selector: 'app-selecthub',
  templateUrl: './selecthub.component.html',
  styleUrls: ['./selecthub.component.css']
})
export class SelecthubComponent implements OnInit {
  getuserData: any;
  constructor(private router: Router, private apiService: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
  }
  userprofile() {
  //   var reqHeader = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('token'))
  //  });
  this.router.navigateByUrl('home/userprofile')
    this.apiService.getuserdta().subscribe(userData => {
      this.getuserData = userData;
      console.log('getuserData',userData);
    })
  }
}
