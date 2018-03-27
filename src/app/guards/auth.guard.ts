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
    return this.authTokenService.validateToken().map(
      res => {
        if(res){
          return true
        }
      }).catch(()=>{
        this.authTokenService.signOut()
        this.router.navigate(['/']);
        return Observable.of(false)
      })
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
    return this.authTokenService.validateToken().map(
      res => {
        if(res){
          this.router.navigate(['/polls']);
          return false
        }
      }).catch(()=>{
        return Observable.of(true)
      })
  }
}