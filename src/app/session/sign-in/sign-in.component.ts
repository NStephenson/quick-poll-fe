import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, SignInData } from 'angular2-token';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router'



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  signInData: SignInData = <SignInData>{};


  constructor(
    private router: Router, 
    private authService: Angular2TokenService) {
  }

  ngOnInit(){ }

  signIn(){
    this.authService.signIn(this.signInData).subscribe(
      res =>    this.router.navigate(['polls']),
      error =>  console.log(error)
    );
  }

}
