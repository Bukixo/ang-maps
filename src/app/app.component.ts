import { Component } from '@angular/core';
import { LocationsDataService } from './locations-data.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  


  constructor(public locationsData : LocationsDataService) {
    this.locationsData = locationsData
  }
locations = this.locationsData.getLocations()
  

  

}
