import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router'
import { Poll, Response } from '../poll';
import { PollService } from '../poll.service';
import { Observable } from 'rxjs/Rx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Angular2TokenService } from 'angular2-token'

@Component({
  selector: 'app-poll-edit',
  templateUrl: './poll-edit.component.html',
  styleUrls: ['./poll-edit.component.css']
})
export class PollEditComponent implements OnInit {
  showEditForm: boolean = false;

  constructor(
    private pollService: PollService,
    private router: Router,
    private tokenService: Angular2TokenService
  ){}

  ngOnInit() {
  }

  @Input() 
  poll: Poll;

  @Output() handleEdit: EventEmitter<any> = new EventEmitter()
  @Output() handleDelete: EventEmitter<any> = new EventEmitter()

  editText: string[] = ["Edit Poll", "Close Edit Form" ]

  editPoll(poll){
    this.pollService.editPoll(poll)
        .subscribe( poll  => { this.showEditForm = false 
                               this.handleEdit.emit(poll)
                             }, 
                    error => { console.log("error saving");
                              return Observable.throw(error);
                            });
  }


  goToShow(poll: Poll): void{
    let link = ['/polls', poll.id];
    this.router.navigate(link)
  }


  showEdit(e){
    e.preventDefault()
    this.showEditForm = !this.showEditForm
  }

  deletePoll(e){
    e.preventDefault()
    this.pollService.deletePoll(this.poll.id)
        .subscribe( data =>  { 
          this.handleDelete.emit(data.poll_id);
        }, 
                    error => { console.log("error saving");
                              return Observable.throw(error);
                            });

  }


}
