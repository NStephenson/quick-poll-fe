import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { RegistrationComponent } from '../session/registration/registration.component'
import { SignInComponent } from '../session/sign-in/sign-in.component'
import { NotFoundComponent } from '../not-found/not-found.component'
import { PollNewComponent } from '../poll/poll-new/poll-new.component'

import { PollShowComponent } from '../poll/poll-show/poll-show.component'
import { PollFormComponent } from '../poll/poll-form/poll-form.component'
import { PollResultsComponent } from '../poll/poll-results/poll-results.component'
import { PollComponent } from '../poll/poll.component'
import { PollIndexComponent } from '../poll/poll-index/poll-index.component';


import { AuthGuard, UnAuthGuard } from '../guards/auth.guard'



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'results', component: PollResultsComponent},
  {path: 'polls/new', component: PollNewComponent},
  {path: 'polls/:id', component: PollShowComponent},
  {path: 'polls', component: PollIndexComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegistrationComponent, canActivate: [UnAuthGuard]},
  {path: 'sign-in', component: SignInComponent, canActivate: [UnAuthGuard]},
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
 }
