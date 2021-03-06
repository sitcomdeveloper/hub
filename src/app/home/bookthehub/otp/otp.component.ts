import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  @Input() prtdata: any;
  @Output() clddata: EventEmitter<any> = new EventEmitter();
  title: any;
  getresendotpRes: any;
  getotpverifyRes: any;
  getOtp = false;
  registerUser = false;
  sendotp: string;
  register: string;
  assignfetchotp: any;
  enterotpForm: FormGroup
  assign: any;
  getuniqueDetails: any;
  bindData: any;
  constructor(private bsmodal: BsModalRef, private apiService: ApiService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    // code for receiving details
    this.getuniqueDetails = JSON.parse(window.sessionStorage.getItem('uniquedtls'));
    this.bindData = this.getuniqueDetails;
    // console.log('parse', this.bindData);

    this.enterotpForm = this.fb.group({
      otp: [''],
      otp1: [''],
      otp2: [''],
      otp3: [''],
    })
  }

  hideModal() {
    this.bsmodal.hide();
  }
  // otp verify
  otpVerify() {
    // this.assign = this.assignfetchotp
    const otpvrify = {
      userID: this.bindData?.userID,
      otp: '' + this.enterotpForm.value.otp + this.enterotpForm.value.otp1 + this.enterotpForm.value.otp2 + this.enterotpForm.value.otp3
    }
    this.apiService.otpVerifcation(otpvrify).subscribe(otpverifyRes => {
      this.getotpverifyRes = otpverifyRes;
      window.sessionStorage.setItem('tokenn', JSON.stringify(otpverifyRes.token));
      // console.log('stringifyToken', JSON.stringify(otpverifyRes.token));
      this.enterotpForm.reset();
      if (this.getotpverifyRes.message === 'OTP verified') {
        this.router.navigateByUrl('home/selecthub');
      }
      setTimeout(() => {
        this.bsmodal.hide();
      },
        1000);
      console.log('getotpverifyRes', otpverifyRes);
    },
    err => {
      if(err.status === 500 || err.status === 400 || err.status === 401 || err.status === 403)
      alert('Invalid OTP');
      this.bsmodal.hide();
      console.log('error', err);
     // check error status code is 500, if so, do some action
    }
    )

  }
  // resend otp
  resendOtp() {
    // this.assign = this.assignfetchotp
    const rsendotp = {
      userID: this.bindData?.userID,
    }
    this.apiService.resendOtp(rsendotp).subscribe(resndotpRes => {
      this.getresendotpRes = resndotpRes;
      this.enterotpForm.reset();
      console.log('getresendotpRes', resndotpRes);
    })
  }
  // register user
}
