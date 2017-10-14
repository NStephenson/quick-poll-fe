import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Poll } from '../poll'
import { PollService } from '../poll.service'
import { Observable } from 'rxjs/Rx'



@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css'],
  providers: [PollService]
})
export class PollFormComponent implements OnInit {
  selection: number[] = [];

  @Input() poll: Poll;
   @Output() submitPoll: EventEmitter<any> = new EventEmitter();

  constructor(private pollService: PollService) { }

  ngOnInit() {
  }
  
 

  handleSubmit(){
    this.pollService.submitResponses(this.poll.id, this.selection)
                    .subscribe(data => {
                      this.submitPoll.emit();
                    }, 
                               error => { console.log("error saving");
                               return Observable.throw(error);
                              });
  }

  handleSelection(id){
    if (this.poll.select_multiple){
      this.toggleCheckbox(id);
    } else {
      this.toggleRadio(id);
    }
  }

  toggleCheckbox(id){
    if (this.selection.includes(id)){
      this.selection = this.selection.filter(x => x != id);
    } else {
      this.selection.push(id);
    }
  }

  toggleRadio(id){
    this.selection = [id];
  }

}
