import { Component,OnInit,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { OtpComponent } from './otp/otp.component';
import { RegisterComponent } from './register/register.component';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-bookthehub',
  templateUrl: './bookthehub.component.html',
  styleUrls: ['./bookthehub.component.css']
})
export class BookthehubComponent implements OnInit {
  title: any;
  fetchotp: any;
  constructor(private modalService: BsModalService, private fb: FormBuilder, private apiService: ApiService, private router: Router) { }
  bsModalRef: BsModalRef;
  bookForm: FormGroup;
  message: any;
  submitted = false;
  ngOnInit(): void {
    this.bookForm = this.fb.group({
      phone: ['', [Validators.required]]
    })
  }
  sendOtp() {
    if (this.bookForm.valid) {
    const usrlogin = {
      phone: this.bookForm.value.phone
    };
    this.apiService.userLogin(usrlogin).subscribe(getotp => {
      this.fetchotp = getotp;
      window.sessionStorage.setItem('uniquedtls', JSON.stringify(getotp));
      console.log('stringifydata', JSON.stringify(getotp));
      if(this.fetchotp.IsExist === 'true, already registered...') {
        const initialState = {
          title: 'Enter the OTP',
          // sendotp: 'sendotp',
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
            assignfetchotp: this.fetchotp
            // register: 'register'
          };
          this.bsModalRef = this.modalService.show(RegisterComponent, Object.assign({ backdrop: 'static', show: true }, { class: 'modal750', initialState }));
          this.bsModalRef.content.closeBtnName = 'Cancel';
          // this.bsmodal.hide();
          // this.bsModalRef.content.clddata.subscribe(data => {
          // this.userDetails();
          // });
        }
      console.log('fetchotp', getotp);
    })
  } else {
    this.submitted = true;
  }
  }
  routetoHome() {
    this.router.navigateByUrl('home');
  }
  get f() {
    return this.bookForm.controls;
  }
}
