import { Injectable, TestabilityRegistry } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from './location.model'

@Injectable({
  providedIn: 'root'  
})
export class LocationsDataService {
  apiUrl = 'https://s3-eu-west-1.amazonaws.com/omnifi/techtests/locations.json'

  constructor(private http: HttpClient) { }


  getLocations() {

    
    return this.http.get<Location[]>(this.apiUrl);
  }
}


