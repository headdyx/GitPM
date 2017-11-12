import { ElementRef, ViewChild, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import {GitIssue} from './../git-issue';
import {GitIssueTimeStats} from './../git-issue-time-stats';
import {DataLoaderService} from './../data-loader.service';


@Component({
  selector: 'app-my-table-online-new',
  templateUrl: './my-table-online-new.component.html',
  styleUrls: ['./my-table-online-new.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MyTableOnlineNewComponent implements OnInit {
  displayedColumns = ['id', 'title', 'state', 'time_estimate'];
  exampleDatabase: DataLoaderService | null;
  dataSource: ExampleDataSource | null;

  // My crappy result array
  public resultList = Array<GitIssue>();

  constructor(private http: HttpClient) {

    this.exampleDatabase = new DataLoaderService(http);
    this.dataSource = new ExampleDataSource(this.exampleDatabase);


  }

  ngOnInit() {
    //
    this.http.get('ENTER_HERE', {
      headers: new HttpHeaders().set('PRIVATE-TOKEN', 'ENTER_HERE')
        }).subscribe((data: Array<any>) => {
        // Read the result field from the JSON response.
        for (let i = 0; i < data.length; i++) { this.resultList[i] = data[i]; }
        console.log('MyTable ngOnInit called ' + JSON.stringify(this.resultList));
    });
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleHttpDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<GitIssue> {

  constructor(private _exampleDatabase: DataLoaderService) {
    super();
    console.log('EXAMPLEDATASOURCE constructor called ');
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<GitIssue[]> {
    console.log('EXAMPLEDATASOURCE connect() called ');
    return this._exampleDatabase.getRepoIssues();
  }

  disconnect() {
    console.log('EXAMPLEDATASOURCE disconnect() called ');
  }
}
