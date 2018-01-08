import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Poll, Response } from '../poll';
import { PollService } from '../poll.service';
import { Observable } from 'rxjs/Rx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Angular2TokenService } from 'angular2-token'

@Component({
  selector: 'app-poll-new',
  templateUrl: './poll-new.component.html',
  styleUrls: ['./poll-new.component.css'],
  providers: [PollService, FormBuilder]
})

export class PollNewComponent implements OnInit {
  poll: Poll = new Poll();
  submitted: boolean = false; 
  // pollForm: FormGroup;


  constructor(
    private pollService: PollService,
    private router: Router,
    private authService: Angular2TokenService
    // private fb: FormBuilder
  ){
    // this.createForm()
  }

  // createForm(){
  //   this.pollForm = this.fb.group({
  //     question: ['', Validators.required],
  //     responses: this.fb.group(new Response()),
  //     select_multiple: false,
  //     public_results: true
  //   })
  // }

  ngOnInit() {
    this.poll.responses = [];
    this.addResponse()
    this.addResponse()
  }

  addResponse(){
    if (!this.responseLimit()){
      this.poll.responses.push(new Response)
    }
  }

  createPoll(poll){
    this.submitted = true;
    this.pollService.createPoll(poll)
        .subscribe(data => { this.goToShow(data);}, 
                   error => { console.log("error saving");
                              return Observable.throw(error);
                            });
  }

  responseLimit(){
    return this.poll.responses.length >= 6
  }

  goToShow(poll: Poll): void{
    let link = ['/polls', poll.id];
    this.router.navigate(link)
  }

  checkResponses(){
    let emptyResponse = false;
    let responses = this.poll.responses

    for(let i=0; i< responses.length; i++){
      if (responses[i].text == "") {
        emptyResponse = true 
      }
    }

    emptyResponse ? null : this.addResponse()
  }


}
