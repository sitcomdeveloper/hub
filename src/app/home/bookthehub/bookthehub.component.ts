import { Component,OnInit,  } from '@angular/core';
import { OtpComponent } from './otp/otp.component';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-bookthehub',
  templateUrl: './bookthehub.component.html',
  styleUrls: ['./bookthehub.component.css']
})
export class BookthehubComponent implements OnInit {
  // @Input() prtdata: any;
  // @Output() clddata: EventEmitter<any> = new EventEmitter();
  title: any;
  constructor(private modalService: BsModalService) { }
  bsModalRef: BsModalRef;
  ngOnInit(): void {
  }
  sendOtp() {
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
