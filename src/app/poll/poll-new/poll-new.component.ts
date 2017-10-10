import { Component, OnInit } from '@angular/core';
import { Poll } from '../poll';
import { PollService } from '../poll.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-poll-new',
  templateUrl: './poll-new.component.html',
  styleUrls: ['./poll-new.component.css'],
  providers: [PollService]
})
export class PollNewComponent implements OnInit {
  poll: Poll = new Poll();
  submitted: boolean = false; 


  constructor(private pollService: PollService){
  }

  ngOnInit() {
    this.poll.responses = [];
    this.addResponse()
    this.addResponse()
  }

  addResponse(){
    if (!this.responseLimit()){
      this.poll.responses.push({text: ''})
    }
  }

  createPoll(poll){
    this.submitted = true;
    this.pollService.createPoll(poll)
        .subscribe(data => {return true;}, 
                   error => { console.log("error saving");
                              return Observable.throw(error);
                            });
  }

  responseLimit(){
    return this.poll.responses.length >= 6
  }


}
