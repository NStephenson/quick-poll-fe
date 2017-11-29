import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { NewUser } from './newUser'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  newUser: NewUser = {};

  constructor(private tokenService: Angular2TokenService) {}

  ngOnInit() {
  }

  signUp(newUser){
    this.tokenService.registerAccount(newUser).subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
  }


}
