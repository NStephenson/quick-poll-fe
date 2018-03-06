import { Component, OnInit, Input } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Router } from '@angular/router'

@Component({
  selector: 'app-facebook-login-link',
  template: '<a href="#" (click)="oAuthSignUp($event)">{{text || "Sign in with facebook" }}</a>'
})
export class FacebookLoginLinkComponent implements OnInit {

  constructor(private router: Router, private tokenService: Angular2TokenService) { }

  ngOnInit() {
  }
  
  @Input()
  text: string;

  oAuthSignUp(e){
    e.preventDefault()

    this.tokenService.signInOAuth('facebook')
        .subscribe(
          res =>      {
            this.tokenService.validateToken(); 
            this.router.navigate(['/polls']);},
          error =>    console.log(error)
    );
  }

}
