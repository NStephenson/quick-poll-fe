import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { NewUser } from './newUser'
import { Router } from '@angular/router'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  newUser: NewUser = {};
  errors: any;

  constructor(
    private tokenService: Angular2TokenService,
    private router: Router
    ) {}

  ngOnInit() {
  }

  signUp(newUser){
    this.tokenService.registerAccount(newUser).subscribe(
      res =>    {
        this.tokenService.validateToken(); 
        this.router.navigate(['polls'])
      },
      error =>  this.errors = JSON.parse(error._body).errors
    );
  }


}
