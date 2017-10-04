import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../poll'

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnInit {
  @Input() poll: Poll;

  constructor() { }

  ngOnInit() {
  }

}
