import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  fturctytxi = true;
  ftreotstation = false;
  ftrrntls = false;
  constructor() { }

  ngOnInit(): void {
  }
  featurescitytaxi() {
    this.fturctytxi = true;
    this.ftreotstation = false;
    this.ftrrntls = false;
  }
  featuresoutstation() {
    this.fturctytxi = false;
    this.ftreotstation = true;
    this.ftrrntls = false;
  }
  featuresrentals() {
    this.fturctytxi = false;
    this.ftreotstation = false;
    this.ftrrntls = true;
  }
}
