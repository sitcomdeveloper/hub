import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { OtpComponent } from '../otp/otp.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() prtdata: any;
  @Output() clddata: EventEmitter<any> = new EventEmitter();
  title: any;
  enterotpForm: FormGroup
  assign: any;
  assignfetchotp: any;
  getUpdateuserres: any;
  getuniqueDetails: any;
  bindData: any;
  // submitted = true;
  constructor(private apiService: ApiService, private fb: FormBuilder, private bsmodal: BsModalRef, private router: Router, private modalService: BsModalService) { }
  bsModalRef: BsModalRef;
  ngOnInit(): void {
     // code for receiving details
     this.getuniqueDetails = JSON.parse(window.sessionStorage.getItem('uniquedtls'));
     this.bindData = this.getuniqueDetails;

    this.assign = this.assignfetchotp
    this.enterotpForm = this.fb.group({
      fullname: ['', [Validators.required]],
      email: ['']
    })
  }
  hideModal() {
    this.bsmodal.hide();
  }
  updtusrUsr() {
    const updteusrdta = {
      userID: this.bindData?.userID,
      name: this.enterotpForm.value.fullname,
      email: this.enterotpForm.value.email,
      phone: this.bindData?.phone,
    }
    this.apiService.updateuserData(updteusrdta).subscribe(updateuserRes => {
      this.getUpdateuserres = updateuserRes;
      console.log('getUpdateuserres', updateuserRes);
    })
    const initialState = {
      title: 'Enter the OTP',
      // assignfetchotp: this.fetchotp
      // this.assign,

    };
    this.bsModalRef = this.modalService.show(OtpComponent, Object.assign({ backdrop: 'static', show: true }, { class: 'modal750', initialState }));
    this.bsModalRef.content.closeBtnName = 'Cancel';
    // this.bsmodal.hide();
    // this.bsModalRef.content.clddata.subscribe(data => {
    // this.userDetails();
    // });
    }
    // get f() {
    //   return this.enterotpForm.controls;
    // }
  }
