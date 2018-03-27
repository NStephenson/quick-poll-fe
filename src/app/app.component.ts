import { Component } from '@angular/core';
import { Angular2TokenService, UserData } from 'angular2-token';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'app';

   constructor(
     public _tokenService: Angular2TokenService,
     private router: Router
     ){
     _tokenService.init({
       apiPath: '/api',
       oAuthBase: 'http://localhost:3000'
     })
   }

   currentUser(): UserData{
     return this._tokenService.userSignedIn() ? this._tokenService.currentUserData : null
   }

  signOut(){
    this._tokenService.signOut().subscribe(
      res   =>  this.router.navigate(['sign-in']),
      error =>  console.log(error)
    );
  }
}
