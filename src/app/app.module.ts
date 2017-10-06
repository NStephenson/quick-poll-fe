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
import { PollShowComponent } from './poll/poll-show/poll-show.component'


@NgModule({
  declarations: [
    AppComponent,
    PollFormComponent,
    PollComponent,
    PollResultsComponent,
    HomeComponent,
    PollNewComponent,
    PollShowComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
