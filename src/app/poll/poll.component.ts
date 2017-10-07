import { Component, OnInit, Input } from '@angular/core';
import { Poll }  from './poll'

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})


export class PollComponent implements OnInit {

  @Input() 
  poll: Poll;

  constructor(
  ){}

  ngOnInit(){
  }

}
