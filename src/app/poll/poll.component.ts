import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Poll }  from './poll';
import { Observable } from 'rxjs/Rx';
import { PollService }  from './poll.service';
import { ISubscription } from "rxjs/Subscription";
import { UserService } from '../user/user.service'


@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css'],
  providers: [PollService]
})


export class PollComponent implements OnInit {

  @Input() poll: Poll;
  @Input() editable: boolean = this.editable;
  @Output() handleDelete: EventEmitter<any> = new EventEmitter()

  results: boolean = false;
  errorMessage: string;
 
  private subscription: ISubscription;


  constructor(private pollService: PollService, private userService: UserService
  ){}

  ngOnInit(){
    this.checkPoll()
    !this.editable && this.userService.isCurrentUser(this.poll.user) ? this.editable = true : null
  }

  toggleResults(e){
    e ? e.preventDefault() : null
    this.results = !this.results;
    
    if (this.results){
      let timer = Observable.timer(0, 5000)
      this.subscription = timer.subscribe(() => this.getPollResponses());
    } else {
      this.subscription.unsubscribe();
    }
  }

  handleEdit(poll){
    this.poll = poll
  }

  emitDelete(pollId){
    this.handleDelete.emit(pollId)
  }

  getPollResponses(){
    this.pollService.getPoll(this.poll.id)
                    .subscribe(
                      poll => {
                        this.poll.responses = this.sortResponses(poll.responses)
                        this.checkPoll()
                      },
                      error => this.errorMessage = <any>error
                    )

  }


  sortResponses(responses) {
    return responses.sort((a,b) =>  a.id > b.id ? 1 : -1)
  }

  checkPoll(){
    if(this.currentUserVotes().includes(this.poll.id)){
      this.results = true;
    }
  }

  currentUserVotes(){
    return [1,2,3,4]
  }

}
