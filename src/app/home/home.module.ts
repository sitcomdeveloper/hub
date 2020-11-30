import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CitytaxiComponent } from './citytaxi/citytaxi.component';
import { OutstationComponent } from './outstation/outstation.component';
import { RentalsComponent } from './rentals/rentals.component';
import { HeaderComponent } from './header/header.component';
import { BookthehubComponent } from './bookthehub/bookthehub.component';
import { OtpComponent } from './bookthehub/otp/otp.component';
import { FooterComponent } from './footer/footer.component';
import { DriveComponent } from './drive/drive.component';
import { SelectComponent } from './select/select.component';
import { DownloadComponent } from './download/download.component';
import { FeaturesComponent } from './features/features.component';
import { FeaturescitytaxiComponent } from './features/featurescitytaxi/featurescitytaxi.component';
import { FeaturesoutstationComponent } from './features/featuresoutstation/featuresoutstation.component';
import { FeaturesrentalsComponent } from './features/featuresrentals/featuresrentals.component';
import { RegisterComponent } from './bookthehub/register/register.component';
import { SelecthubComponent } from './selecthub/selecthub.component';
import { SelecthubdailyridesComponent } from './selecthub/selecthubdailyrides/selecthubdailyrides.component';
import { UserprofileComponent } from './userprofile/userprofile.component';



@NgModule({
  declarations: [HomeComponent, CitytaxiComponent, OutstationComponent, RentalsComponent, HeaderComponent, BookthehubComponent, OtpComponent, FooterComponent, DriveComponent, SelectComponent, DownloadComponent, FeaturesComponent, FeaturescitytaxiComponent, FeaturesoutstationComponent, FeaturesrentalsComponent, RegisterComponent, SelecthubComponent, SelecthubdailyridesComponent, UserprofileComponent],
  imports: [
    CommonModule, HomeRoutingModule, FormsModule, ReactiveFormsModule, ModalModule.forRoot(),
  ],
  entryComponents: [OtpComponent, RegisterComponent],
})
export class HomeModule { }
