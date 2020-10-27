import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CitytaxiComponent } from './citytaxi/citytaxi.component';
import { OutstationComponent } from './outstation/outstation.component';
import { RentalsComponent } from './rentals/rentals.component';
import { HeaderComponent } from './header/header.component';
import { BookthehubComponent } from './bookthehub/bookthehub.component';



@NgModule({
  declarations: [HomeComponent, CitytaxiComponent, OutstationComponent, RentalsComponent, HeaderComponent, BookthehubComponent],
  imports: [
    CommonModule, HomeRoutingModule
  ]
})
export class HomeModule { }
