import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  citytaxi = true;
  outstation = false;
  rntls = false;
  constructor(private router: Router) { }

  loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement("script");
    script.innerHTML = "";
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  ngOnInit(): void {
    this.loadScript("assets/autohub-images2/webstatic/js/jquery-3.2.1.min.js");
    this.loadScript("assets/autohub-images2/webstatic/js/landing-main.js");
    this.loadScript("assets/autohub-images2/webstatic/js/routes.js");
    this.loadScript("assets/autohub-images2/webstatic/js/send-events.js");
    this.loadScript("assets/autohub-images2/webstatic/js/seo.js");
    this.loadScript("assets/autohub-images2/webstatic/js/share-pass.js");
    this.loadScript("assets/autohub-images2/webstatic/js/share.js");
    this.loadScript("assets/autohub-images2/webstatic/js/slick.js");
  }
  ciytaxi() {
    this.citytaxi = true;
    this.outstation = false;
    this.rntls = false;
  }
  oustation() {
    this.citytaxi = false;
    this.outstation = true;
    this.rntls = false;
  }
  rentals() {
    this.citytaxi = false;
    this.outstation = false;
    this.rntls = true;
  }
}
