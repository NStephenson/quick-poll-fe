import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Poll } from '../poll'

@Component({
  selector: 'app-poll-results',
  templateUrl: './poll-results.component.html',
  styleUrls: [ '../poll-form/poll-form.component.css']
})
export class PollResultsComponent implements OnInit {

  @Input()
  poll: Poll;
  @Output() toggleResults: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

   seeResults(){
    this.toggleResults.emit()
  }

}
