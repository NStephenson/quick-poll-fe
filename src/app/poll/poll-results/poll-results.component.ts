import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../poll'

@Component({
  selector: 'app-poll-results',
  templateUrl: './poll-results.component.html',
  styleUrls: ['./poll-results.component.css', '../poll-form/poll-form.component.css']
})
export class PollResultsComponent implements OnInit {

  @Input()
  poll: Poll;

  constructor() { }

  ngOnInit() {
  }

}
