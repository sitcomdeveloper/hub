import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  constructor(private bsmodal: BsModalRef, private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    // get otp
    if(this.sendotp === 'sendotp') {
      this.getOtp = true;
      this.assign = this.assignfetchotp
      console.log('a',this.assign);
    } else {
      this.getOtp = false;
    }
    // register user
    if(this.register === 'register') {
      this.registerUser = true;
    } else {
      this.registerUser = false;
    }
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
    this.assign = this.assignfetchotp
    const otpvrify = {
      userID: this.assign.userID,
      otp: '' + this.enterotpForm.value.otp + this.enterotpForm.value.otp1 + this.enterotpForm.value.otp2 + this.enterotpForm.value.otp3
    }
    this.apiService.otpVerifcation(otpvrify).subscribe(otpverifyRes => {
      this.getotpverifyRes = otpverifyRes;
      this.enterotpForm.reset();
      console.log('getotpverifyRes',otpverifyRes);
    })
  }
// resend otp
  resendOtp() {
    this.assign = this.assignfetchotp
    const rsendotp = {
      userID: this.assign.userID,
    }
    this.apiService.resendOtp(rsendotp).subscribe(resndotpRes => {
      this.getresendotpRes = resndotpRes;
      this.enterotpForm.reset();
      console.log('getresendotpRes', resndotpRes);
    })
  }
}
