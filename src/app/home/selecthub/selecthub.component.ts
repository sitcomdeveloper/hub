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
  fetchuserData: any;
  constructor(private router: Router, private apiService: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
  }
  userprofile() {

    this.apiService.getuserdta().subscribe(userautohubData => {
      this.getuserData = userautohubData;
      this.fetchuserData = this.getuserData.userData;
      // console.log('fetchuserData', this.getuserData.userData);
      window.sessionStorage.setItem('fetchingDetails', JSON.stringify(this.getuserData.userData))

        if(JSON.parse(sessionStorage.getItem('fetchingDetails'))) {
          this.router.navigateByUrl('home/userprofile')
        }
    })
  }
}
