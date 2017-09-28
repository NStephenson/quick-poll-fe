import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from '../home/home.component'



import { PollFormComponent } from '../poll/poll-form/poll-form.component'
import { PollResultsComponent } from '../poll/poll-results/poll-results.component'
import { PollComponent } from '../poll/poll.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'results', component: PollResultsComponent}
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
