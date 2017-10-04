import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Poll }  from './poll'
import { Observable } from 'rxjs/Rx'
import { PollService } from './poll.service'

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})

export class PollComponent implements OnInit {
  poll: Poll;
  errorMessage: string;
  mode = "Observable";


  constructor(
    private pollService: PollService,
    private router: Router
  ){}

  ngOnInit(){
    let timer = Observable.timer(0)
    timer.subscribe(() => this.getPoll())
  }

  getPoll(){
    this.pollService.getPoll(2)
        .subscribe(
          poll => this.poll = poll,
          error => this.errorMessage = <any>error
        )
  }

}
