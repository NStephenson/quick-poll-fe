import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import { Poll } from './poll'

@Injectable()
export class PollService {
  private pollsUrl: string = "http://localhost:3000/polls";

  constructor(private http: Http) { }

  getPolls(): Observable<Poll[]> {
    return this.http.get(this.pollsUrl + ".json")
                    .map((response: Response) => <Poll[]>response.json())
                    .catch(this.handleError)
  }

  getPoll(id: number): Observable<Poll> {
    return this.http.get(this.pollsUrl + `/${id}.json`)
                    .map((response: Response) => <Poll>response.json())
                    .catch(this.handleError)
  }

  createPoll(poll: Poll){
    poll.responses_attributes = poll.responses
    let headers = new Headers({'Content-Type': 'application/json'})
    let options = new RequestOptions({headers: headers})
    return this.http.post(this.pollsUrl, JSON.stringify({poll: poll}), {headers: headers})
           .map((res: Response) => res.json())
  }

  submitResponses(pollId: number, responseIds: number[]){
    let route = `/${pollId}/results`
    let res = {poll: {id: pollId, response_ids: responseIds}}
    let headers = new Headers({'Content-Type': 'application/json'})
    let options = new RequestOptions({headers: headers})

    return this.http.post(this.pollsUrl + route, JSON.stringify(res), {headers: headers})
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




