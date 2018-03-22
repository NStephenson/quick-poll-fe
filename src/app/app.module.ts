import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { UserService } from './user/user.service';

import { Angular2TokenService } from 'angular2-token';

import { NotFoundComponent } from './not-found/not-found.component';
import { PollIndexComponent } from './poll/poll-index/poll-index.component';
import { AuthGuard, UnAuthGuard } from './guards/auth.guard';
import { UserShowComponent } from './user/user-show/user-show.component';
import { FacebookLoginLinkComponent } from './session/facebook-login-link/facebook-login-link.component';
import { PollEditComponent } from './poll/poll-edit/poll-edit.component'


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
    PollIndexComponent,
    UserShowComponent,
    FacebookLoginLinkComponent,
    PollEditComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [PollService, Angular2TokenService, AuthGuard, UnAuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
