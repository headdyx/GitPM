import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-config-menu',
  templateUrl: './config-menu.component.html',
  styleUrls: ['./config-menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigMenuComponent implements OnInit {
  selectedServer = 'option2';
  selectedProject = 'option1';
  constructor() { }

  ngOnInit() {
  }

}
