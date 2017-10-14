import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
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


  constructor(private pollService: PollService,
    private router: Router){
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
        .subscribe(data => { this.goToShow(data);}, 
                   error => { console.log("error saving");
                              return Observable.throw(error);
                            });
  }

  responseLimit(){
    return this.poll.responses.length >= 6
  }

  goToShow(poll: Poll): void{
    let link = ['/polls', poll.id];
    this.router.navigate(link)
  }


}
