import { Component, OnInit } from '@angular/core';
import { Poll } from '../poll';
import { PollService } from '../poll.service';
import { Observable } from 'rxjs/Rx'
import { Resolve } from '@angular/router'


@Component({
  selector: 'app-poll-index',
  templateUrl: './poll-index.component.html',
  styleUrls: ['./poll-index.component.css']
})
export class PollIndexComponent implements OnInit {
  polls: Poll[];
  errorMessage: string; 

  constructor(private pollService: PollService) { }

  ngOnInit(){
    this.getPolls()
  }



  getPolls(){
    this.pollService.getPolls().subscribe(
      resp => this.polls = resp,
      error => this.errorMessage = <any>error
    )
  }

}
