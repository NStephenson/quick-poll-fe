import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import { User } from './user'
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class UserService {

  constructor( private tokenService: Angular2TokenService
             ) { }


  getUser(username: string): Observable<User> {
    return this.tokenService.get(`users/${username}`)
                    .map((response: Response) => <User>response.json())
                    .catch(this.handleError)
  }

  currentUser(): User{
     return this.tokenService.userSignedIn ? this.tokenService.currentUserData : null
   }

  isCurrentUser(user: User): boolean{
    return this.currentUser() ? this.currentUser().id  === user.id : null
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

