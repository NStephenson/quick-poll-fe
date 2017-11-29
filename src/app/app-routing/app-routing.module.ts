import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { RegistrationComponent } from '../session/registration/registration.component'
import { SignInComponent } from '../session/sign-in/sign-in.component'
import { NotFoundComponent } from '../not-found/not-found.component'

import { PollShowComponent } from '../poll/poll-show/poll-show.component'
import { PollFormComponent } from '../poll/poll-form/poll-form.component'
import { PollResultsComponent } from '../poll/poll-results/poll-results.component'
import { PollComponent } from '../poll/poll.component'
import { PollIndexComponent } from '../poll/poll-index/poll-index.component';


import { Angular2TokenService } from 'angular2-token';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'results', component: PollResultsComponent},
  {path: 'polls/:id', component: PollShowComponent},
  {path: 'polls', component: PollIndexComponent, canActivate: [Angular2TokenService]},
  {path: 'register', component: RegistrationComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: '**', component: NotFoundComponent}
]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule {
    constructor(private _tokenService: Angular2TokenService) {
        this._tokenService.init({
          apiBase: "http://localhost:3000",
          signInPath: '',
          signInRedirect: ''
        });
    }

 }
