import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../poll'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import { PollService } from '../poll.service'

@Component({
  selector: 'app-poll-show',
  templateUrl: './poll-show.component.html',
  styleUrls: ['./poll-show.component.css'],
  providers: [PollService]
})
export class PollShowComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: Http,
    private pollService: PollService,
  ) { }

  @Input()
  poll: Poll;
  errorMessage: string; 

  ngOnInit(): void { 
    this.getPoll()
  }

   handleDelete(pollId){
    this.router.navigate(['polls/new'])
  }

  getPoll(){
    let pollRequest = this.route.params
        .flatMap((params: Params) => this.pollService.getPoll(+params['id']));

    pollRequest.subscribe(
      response => this.poll = response,
      error => this.errorMessage = <any>error
    )
  }
}
