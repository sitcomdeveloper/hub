import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  ngOnInit(): void {
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
