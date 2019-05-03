import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationsDataService } from '../locations-data.service'
import { Location } from '../location.model'

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {
  locations$: Location[]

  constructor( private locationDataService: LocationsDataService) {}

  ngOnInit(){
    return this.locationDataService.getLocations()
      .subscribe(data => this.locations$ = data)
  }

}
