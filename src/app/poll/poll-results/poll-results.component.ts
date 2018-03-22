import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Poll } from '../poll'
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-poll-results',
  templateUrl: './poll-results.component.html',
  styleUrls: [ '../poll-form/poll-form.component.css']
})
export class PollResultsComponent implements OnInit {

  @Input() poll: Poll;
  @Input() editable: boolean;
  @Output() toggleResults: EventEmitter<any> = new EventEmitter()
  @Output() handleEdit: EventEmitter<any> = new EventEmitter()
  @Output() handleDelete: EventEmitter<any> = new EventEmitter()


  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  emitEdit(poll){
    this.handleEdit.emit(poll)
  }

  emitDelete(pollId){
    this.handleDelete.emit(pollId)
  }

   seeResults(){
    this.toggleResults.emit()
  }

}
