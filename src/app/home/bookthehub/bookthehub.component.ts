import { Component,OnInit,  } from '@angular/core';
import { OtpComponent } from './otp/otp.component';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-bookthehub',
  templateUrl: './bookthehub.component.html',
  styleUrls: ['./bookthehub.component.css']
})
export class BookthehubComponent implements OnInit {
  title: any;
  fetchotp: any;
  constructor(private modalService: BsModalService, private fb: FormBuilder, private apiService: ApiService) { }
  bsModalRef: BsModalRef;
  bookForm: FormGroup;
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
      console.log('fetchotp', getotp);
    })
    const initialState = {
      title: 'Enter the OTP',
    };
    // tslint:disable-next-line: max-line-length
    this.bsModalRef = this.modalService.show(OtpComponent, Object.assign({ backdrop: 'static', show: true }, { class: 'modal750', initialState }));
    this.bsModalRef.content.closeBtnName = 'Cancel';
    // this.bsmodal.hide();
    // this.bsModalRef.content.clddata.subscribe(data => {
    // this.userDetails();
    // });
    }
}

