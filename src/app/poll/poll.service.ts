import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import { Poll } from './poll'
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class PollService {

  constructor( private tokenService: Angular2TokenService
             ) { }

  getPolls(): Observable<Poll[]> {
    return this.tokenService.get('polls')
                    .map((response: Response) => <Poll[]>response.json())
                    .catch(this.handleError)
  }

  getPoll(id: number): Observable<Poll> {
    return this.tokenService.get(`polls/${id}`)
                    .map((response: Response) => <Poll>response.json())
                    .catch(this.handleError)
  }

  createPoll(poll: Poll){
    poll.responses_attributes = poll.responses
    return this.tokenService.post('polls', JSON.stringify({poll: poll}))
           .map((res: Response) => res.json())
  }

  submitResponses(pollId: number, responseIds: number[]){
    let res = {poll: {id: pollId, response_ids: responseIds}}

    return this.tokenService.post(`polls/${pollId}/results`, JSON.stringify(res))
                    .map((res: Response) => res.json())
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




