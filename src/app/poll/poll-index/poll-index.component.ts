import { Component, OnInit } from '@angular/core';
import { Poll } from '../poll';
import { PollService } from '../poll.service';
import { Observable } from 'rxjs/Rx'


@Component({
  selector: 'app-poll-index',
  templateUrl: './poll-index.component.html',
  styleUrls: ['./poll-index.component.css']
})
export class PollIndexComponent implements OnInit {
  polls: Poll[];
  errorMessage: string; 

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.getPolls()
  }

  getPolls(){
    this.pollService.getPolls().subscribe(
      response => this.polls = response,
      error => this.errorMessage = <any>error
    )
  }

}
