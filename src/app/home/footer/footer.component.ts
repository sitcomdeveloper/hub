import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  bookthehub() {
    this.router.navigateByUrl('home/book');
  }
  aboutus() {
    this.router.navigateByUrl('home/about-us');
  }
  contactus() {
    this.router.navigateByUrl('home/contact-us');
  }
  privacypolicy() {
    this.router.navigateByUrl('home/privacy-policy')
  }
}
