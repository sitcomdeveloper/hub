import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CitytaxiComponent } from './citytaxi/citytaxi.component';
import { OutstationComponent } from './outstation/outstation.component';
import { RentalsComponent } from './rentals/rentals.component';
import { HeaderComponent } from './header/header.component';
import { BookthehubComponent } from './bookthehub/bookthehub.component';
import { OtpComponent } from './bookthehub/otp/otp.component';



@NgModule({
  declarations: [HomeComponent, CitytaxiComponent, OutstationComponent, RentalsComponent, HeaderComponent, BookthehubComponent, OtpComponent],
  imports: [
    CommonModule, HomeRoutingModule, FormsModule, ReactiveFormsModule
  ],
  entryComponents: [OtpComponent],
})
export class HomeModule { }
