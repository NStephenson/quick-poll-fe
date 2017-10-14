import { Component, OnInit, Input } from '@angular/core';
import { Poll }  from './poll';
import { Observable } from 'rxjs/Rx';
import { PollService }  from './poll.service';
import { ISubscription } from "rxjs/Subscription";


@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css'],
  providers: [PollService]
})


export class PollComponent implements OnInit {
  results: boolean = false
  errorMessage: string;
  private subscription: ISubscription;


  @Input() poll: Poll;

  constructor(private pollService: PollService
  ){}

  ngOnInit(){
  }

  toggleResults(e){
    e ? e.preventDefault() : null
    this.results = !this.results;
    
    if (this.results){
      let timer = Observable.timer(0, 5000)
      this.subscription = timer.subscribe(() => this.getPoll());
    } else {
      this.subscription.unsubscribe();
    }
  }

  getPoll(){
    this.pollService.getPoll(this.poll.id)
                    .subscribe(
                      poll => this.poll = poll,
                      error => this.errorMessage = <any>error
                    )
  }

}
