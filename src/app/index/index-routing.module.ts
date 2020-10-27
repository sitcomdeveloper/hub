import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
    // {path: 'login', component: LoginComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
