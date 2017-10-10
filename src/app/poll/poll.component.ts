import { Component, OnInit, Input } from '@angular/core';
import { Poll }  from './poll'

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})


export class PollComponent implements OnInit {
  results: boolean = false

  @Input() 
  poll: Poll;

  constructor(
  ){}

  ngOnInit(){
  }

  toggleResults(e){
    e.preventDefault()
    this.results = !this.results
  }

}
