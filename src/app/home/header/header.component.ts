import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  bookthehub() {
    this.router.navigateByUrl('home/book');
  }
  drive() {
    this.router.navigateByUrl('home/drive');
  }
  select() {
    this.router.navigateByUrl('home/select');
  }
}
