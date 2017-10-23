import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { NewUser } from './newUser'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [Angular2TokenService]
})
export class RegistrationComponent implements OnInit {
  newUser: NewUser = {};

  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({
          apiBase: "http://localhost:3000"
        });
  }

  ngOnInit() {
  }

  signUp(newUser){
    this._tokenService.registerAccount({
      email:                newUser.email,
      username:             newUser.username,
      password:             newUser.password,
      passwordConfirmation: newUser.passwordConfirmation
    }).subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
  }


}
