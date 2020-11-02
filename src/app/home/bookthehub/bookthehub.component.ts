import { Component,OnInit,  } from '@angular/core';
import { OtpComponent } from './otp/otp.component';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookthehub',
  templateUrl: './bookthehub.component.html',
  styleUrls: ['./bookthehub.component.css']
})
export class BookthehubComponent implements OnInit {
  title: any;
  fetchotp: any;
  constructor(private modalService: BsModalService, private fb: FormBuilder, private apiService: ApiService, private router:Router) { }
  bsModalRef: BsModalRef;
  bookForm: FormGroup;
  message: any;
  ngOnInit(): void {
    this.bookForm = this.fb.group({
      phone: ['']
    })
  }
  sendOtp() {
    const usrlogin = {
      phone: this.bookForm.value.phone
    };
    this.apiService.userLogin(usrlogin).subscribe(getotp => {
      this.fetchotp = getotp;
      if(this.fetchotp.IsExist === 'true, already registered...') {
        const initialState = {
          title: 'Enter the OTP',
          sendotp: 'sendotp',
          assignfetchotp: this.fetchotp
        };
        this.bsModalRef = this.modalService.show(OtpComponent, Object.assign({ backdrop: 'static', show: true }, { class: 'modal750', initialState }));
        this.bsModalRef.content.closeBtnName = 'Cancel';
        // this.bsmodal.hide();
        // this.bsModalRef.content.clddata.subscribe(data => {
        // this.userDetails();
        // });
        } else {
          const initialState = {
            title: 'Register',
            register: 'register'
          };
          this.bsModalRef = this.modalService.show(OtpComponent, Object.assign({ backdrop: 'static', show: true }, { class: 'modal750', initialState }));
          this.bsModalRef.content.closeBtnName = 'Cancel';
          // this.bsmodal.hide();
          // this.bsModalRef.content.clddata.subscribe(data => {
          // this.userDetails();
          // });
        }
      console.log('fetchotp', getotp);
    })
  }
  routetoHome() {
    this.router.navigateByUrl('home');
  }
}
