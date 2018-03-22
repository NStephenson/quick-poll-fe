import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Response, Headers, RequestOptions } from '@angular/http'
import { UserService } from '../user.service';
import { User } from '../user'

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css'],
  providers: [UserService]
})
export class UserShowComponent implements OnInit {

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  user: User;
  errorMessage: any;

  ngOnInit() {
    this.getUser();
  }

  handleDelete(pollId){
    this.user.polls = this.user.polls.filter( poll => poll.id != pollId )
  }


  getUser(){
    let userRequest = this.route.params
        .flatMap((params: Params) => this.userService.getUser(params['username']));

    userRequest.subscribe(
      response => this.user = response,
      error => this.errorMessage = <any>error
    )
  }

}
