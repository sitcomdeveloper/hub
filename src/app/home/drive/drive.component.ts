import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.css']
})
export class DriveComponent implements OnInit {

  constructor() { }

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
    this.loadScript("assets/www.olacabs.com/webstatic/js/jquery-3.2.1.min.js");
    this.loadScript("assets/www.olacabs.com/webstatic/js/landing-main.js");
    this.loadScript("assets/www.olacabs.com/webstatic/js/routes.js");
    this.loadScript("assets/www.olacabs.com/webstatic/js/send-events.js");
    this.loadScript("assets/www.olacabs.com/webstatic/js/seo.js");
    this.loadScript("assets/www.olacabs.com/webstatic/js/share-pass.js");
    this.loadScript("assets/www.olacabs.com/webstatic/js/share.js");
    this.loadScript("assets/www.olacabs.com/webstatic/js/slick.js");
  }

}