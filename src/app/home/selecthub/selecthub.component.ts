import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecthub',
  templateUrl: './selecthub.component.html',
  styleUrls: ['./selecthub.component.css']
})
export class SelecthubComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  userprofile() {
    this.router.navigateByUrl('home/userprofile')
  }
}
