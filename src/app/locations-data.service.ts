import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsDataService {

  private locations: any;


  getLocations() {
    this.locations = [
      {
        "name": "Åland Islands",
        "capital": "Mariehamn",
        "latitude": 60.116667,
        "longitude": 19.9
      },
      {
        "name": "Albania",
        "capital": "Tirana",
        "latitude": 41,
        "longitude": 20
      },
      {
        "name": "Andorra",
        "capital": "Andorra la Vella",
        "latitude": 42.5,
        "longitude": 1.5
      },
    ]
    return this.locations
  }

}
