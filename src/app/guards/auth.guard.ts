import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Angular2TokenService} from "angular2-token";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authTokenService: Angular2TokenService,
    private router: Router 
   ){}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
  {
    if(this.authTokenService.userSignedIn()){
      return true;
    }else{
      this.router.navigate(['/']);
      return false;
    }
  }
}

@Injectable()
export class UnAuthGuard implements CanActivate {

  constructor(
    private authTokenService: Angular2TokenService,
    private router: Router 
   ){}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
  {
    if(!this.authTokenService.userSignedIn()){
      return true;
    }else{
      this.router.navigate(['/polls']);
      return false;
    }
  }
}