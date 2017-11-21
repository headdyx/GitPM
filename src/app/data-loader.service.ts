import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import './rxjs-operators';

import {GitIssue} from './git-issue';
import {GitIssueTimeStats} from './git-issue-time-stats';

@Injectable()
export class DataLoaderService {

  constructor(private http: HttpClient) {
    console.log('EXAMPLEHTTPDATABASE constructor called ');
  }

  private _server = '';
  private _project = '';
  private _privateToken = '';

  private issuesUrl = 'https://' + this._server + '/api/v4/projects/' + this._project + '/issues';  // URL to web API

      /** Stream that emits whenever the data has been modified.
      dataChange: BehaviorSubject<GitIssue[]> = new BehaviorSubject<GitIssue[]>([]);
      get data(): GitIssue[] { return this.dataChange.value; }
      */

    getRepoIssues(): Observable<GitIssue[]> {
      console.log('EXAMPLEHTTPDATABASE getRepoIssues() called ');
      return this.http.get(this.issuesUrl, {headers: new HttpHeaders().set('PRIVATE-TOKEN', this._privateToken)})
                      .map(this.extractData);
    }

    extractData(result: GitIssue[]) {
      console.log('EXAMPLEHTTPDATABASE extractData() called ');
      return result.map(issue => {
        return {
          iid: issue.iid,
          state: issue.state,
          title: issue.title,
          // calculating seconds to hours
          time_stats: issue.time_stats
        };
      });
    }

}
