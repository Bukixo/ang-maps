import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  
  title = 'ang-maps';
  
  lat: number = 43;
  lng: number = 25;

locations = [
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
  }

]
  

  

}
