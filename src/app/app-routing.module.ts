import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {LoginComponent} from './login/login.component';
import {EventFormComponent} from './event-form/event-form.component';
import {EventViewComponent} from './event-view/event-view.component';
import {SignupComponent} from './signup/signup.component';

import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'event-form' , component:EventFormComponent ,  canActivate:[AuthGuard]},
  {path:'event-view', component:EventViewComponent ,  canActivate:[AuthGuard]},
  {path :'signup' , component:SignupComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
