import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() prtdata: any;
  @Output() clddata: EventEmitter<any> = new EventEmitter();
  title: any;
  getRegisteruserres: any;
  enterotpForm: FormGroup
  assign: any;
  assignfetchotp: any;
  constructor(private apiService: ApiService, private fb: FormBuilder, private bsmodal: BsModalRef, private router: Router) { }

  ngOnInit(): void {
    this.enterotpForm = this.fb.group({
      fullname: [''],
      email: ['']
    })
  }
  hideModal() {
    this.bsmodal.hide();
  }
  regiterUsr() {
    this.assign = this.assignfetchotp
    const rgstruser = {
      name: this.enterotpForm.value.fullname,
      email: this.enterotpForm.value.email,
      phone: this.assign.phone,
      facebook: '',
      google: '',
      profile: '',
    }
    this.apiService.userRegister(rgstruser).subscribe(registeruserRes => {
      this.getRegisteruserres = registeruserRes;
      this.router.navigateByUrl('verify');
      console.log('getRegisteruserres', registeruserRes);
    })
  }
}
