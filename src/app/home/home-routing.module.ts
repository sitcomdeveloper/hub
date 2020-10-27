import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CitytaxiComponent } from './citytaxi/citytaxi.component';
import { OutstationComponent } from './outstation/outstation.component';
import { BookthehubComponent } from './bookthehub/bookthehub.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'citytaxi', component: CitytaxiComponent},
  {path:'outstation', component: OutstationComponent},
  {path:'book', component: BookthehubComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
 ],
 exports: [RouterModule]
})
export class HomeRoutingModule { }
