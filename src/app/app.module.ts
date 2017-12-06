import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing/app-routing.module';




import { AppComponent } from './app.component';
import { PollFormComponent } from './poll/poll-form/poll-form.component';
import { PollComponent } from './poll/poll.component';
import { PollResultsComponent } from './poll/poll-results/poll-results.component';
import { PollService } from './poll/poll.service';
import { HomeComponent } from './home/home.component';
import { PollNewComponent } from './poll/poll-new/poll-new.component';
import { PollShowComponent } from './poll/poll-show/poll-show.component';
import { SessionComponent } from './session/session.component';
import { RegistrationComponent } from './session/registration/registration.component';
import { SignInComponent } from './session/sign-in/sign-in.component';

import { Angular2TokenService } from 'angular2-token';

import { NotFoundComponent } from './not-found/not-found.component';
import { PollIndexComponent } from './poll/poll-index/poll-index.component';
import { AuthGuard, UnAuthGuard } from './guards/auth.guard'


@NgModule({
  declarations: [
    AppComponent,
    PollFormComponent,
    PollComponent,
    PollResultsComponent,
    HomeComponent,
    PollNewComponent,
    PollShowComponent,
    SessionComponent,
    RegistrationComponent,
    SignInComponent,
    NotFoundComponent,
    PollIndexComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PollService, Angular2TokenService, AuthGuard, UnAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
