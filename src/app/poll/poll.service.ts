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




