import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CitytaxiComponent } from './citytaxi/citytaxi.component';
import { OutstationComponent } from './outstation/outstation.component';
import { BookthehubComponent } from './bookthehub/bookthehub.component';
import { RentalsComponent } from './rentals/rentals.component';
import { OtpComponent } from './bookthehub/otp/otp.component';
import { DriveComponent } from './drive/drive.component';
import { SelectComponent } from './select/select.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'citytaxi', component: CitytaxiComponent },
      { path: 'outstation', component: OutstationComponent },
      { path: 'rentals', component: RentalsComponent },
    ]
  },
  { path: 'book', component: BookthehubComponent, children: [
    {path: 'verify', component: OtpComponent},
  ]},
  { path: 'drive', component: DriveComponent },
  { path: 'select', component: SelectComponent },
  { path: 'features', component: FeaturesComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
