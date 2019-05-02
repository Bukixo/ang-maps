import { Component} from '@angular/core';
import { LocationsDataService } from './locations-data.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  
export class AppComponent {
  constructor(private http: HttpClient) { }
   locations;
   ngOnInit() {
      this.http.get("https://s3-eu-west-1.amazonaws.com/omnifi/techtests/locations.json")
      .subscribe((location) => this.displaydata(location)); 
        
   }
   displaydata(location) {this.locations = location;}
}
  
//   constructor(public locationsData : LocationsDataService) {
//     this.locationsData = locationsData
//   }
// locations = this.locationsData.getLocations()
  


// }
