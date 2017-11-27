import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MyServer } from './myserver';

@Injectable()
export class ConfigService {

  public serverArray: MyServer[];
  private jsonPath = './assets/config.json';

  constructor(private http: HttpClient) { }

  loadConfig(): void {
    console.log('ConfigService.loadConfig() started');
    const serverArray = this.http.get(this.jsonPath).subscribe(data => {
        // Read the result field from the JSON response.
        this.serverArray = data['servers'];
        console.log('ConfigService.loadConfig() async added ' + this.serverArray.length + ' servers');
        for (let i = 0; i < this.serverArray.length; i++) {
          console.log('ConfigService.loadConfig() added server name: ' + this.serverArray[i].name);
        }
      }, err => {
        console.log('ConfigService.loadConfig() ERROR Response ');
    });

  }

}
