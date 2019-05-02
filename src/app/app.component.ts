import { Component} from '@angular/core';
import { LocationsDataService } from './locations-data.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


// export class AppComponent {
  

//    locations : any


//   constructor(public locationsData : LocationsDataService) {
//     this.locationsData = locationsData
//   }
// locations = [
//   {
//   "name": "Åland Islands",
//   "capital": "Mariehamn",
//   "latitude": 60.116667,
//   "longitude": 19.9
//   },
//   {
//   "name": "Albania",
//   "capital": "Tirana",
//   "latitude": 41,
//   "longitude": 20
//   },
//   {
//   "name": "Andorra",
//   "capital": "Andorra la Vella",
//   "latitude": 42.5,
//   "longitude": 1.5
//   }

// ]
  
export class AppComponent {
  
  constructor(public locationsData : LocationsDataService) {
    this.locationsData = locationsData
  }
locations = this.locationsData.getLocations()
  


}
