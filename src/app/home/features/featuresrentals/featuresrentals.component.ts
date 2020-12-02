import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featuresrentals',
  templateUrl: './featuresrentals.component.html',
  styleUrls: ['./featuresrentals.component.css']
})
export class FeaturesrentalsComponent implements OnInit {

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
    this.loadScript("assets/autohub-images2/webstatic/js/jquery-3.2.1.min.js");
    this.loadScript("assets/autohub-images2/webstatic/js/landing-main.js");
    this.loadScript("assets/autohub-images2/webstatic/js/routes.js");
    this.loadScript("assets/autohub-images2/webstatic/js/send-events.js");
    this.loadScript("assets/autohub-images2/webstatic/js/seo.js");
    this.loadScript("assets/autohub-images2/webstatic/js/share-pass.js");
    this.loadScript("assets/autohub-images2/webstatic/js/share.js");
    this.loadScript("assets/autohub-images2/webstatic/js/slick.js");
    // for features
    this.loadScript("assets/autohub-images2/webstatic/js/features.js");
    this.loadScript("assets/autohub-images2/webstatic/js/send-events.js");
  }

}
