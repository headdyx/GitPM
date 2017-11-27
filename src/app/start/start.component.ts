import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StartComponent implements OnInit {

  constructor(public configservice: ConfigService) { }

  ngOnInit() {

    this.configservice.loadConfig();
    console.log('Start component ngOnInit called ');
  }

}
