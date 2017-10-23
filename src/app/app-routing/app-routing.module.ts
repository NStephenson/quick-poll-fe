import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

import { HomeComponent } from '../home/home.component';
import { RegistrationComponent } from '../session/registration/registration.component'


import { PollShowComponent } from '../poll/poll-show/poll-show.component'
import { PollFormComponent } from '../poll/poll-form/poll-form.component'
import { PollResultsComponent } from '../poll/poll-results/poll-results.component'
import { PollComponent } from '../poll/poll.component'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'results', component: PollResultsComponent},
  {path: 'polls/:id', component: PollShowComponent},
  {path: 'register', component: RegistrationComponent}
]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
