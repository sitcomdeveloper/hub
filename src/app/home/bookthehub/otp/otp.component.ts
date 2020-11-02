import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  constructor(private bsmodal: BsModalRef, private apiService: ApiService) { }

  ngOnInit(): void {
  }

  hideModal() {
    this.bsmodal.hide();
  }
// resend otp
  resendOtp() {
    const rsendotp = {

    }
    this.apiService.resendOtp(rsendotp).subscribe(resndotpRes => {
      this.getresendotpRes = resndotpRes;
      console.log('getresendotpRes', resndotpRes);
    })
  }
  // otp verify
  otpVerify() {
    const otpvrify = {

    }
    this.apiService.otpVerifcation(otpvrify).subscribe(otpverifyRes => {
      this.getotpverifyRes = otpverifyRes;
      console.log('getotpverifyRes',otpverifyRes);
    })
  }
}
