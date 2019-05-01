import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { LocationsDataService } from './locations-data.service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCwO_zeKZ9hDaXiP-ZM_rrSC21X_0KoPe8"
    }),
    AgmJsMarkerClustererModule
  ],
  providers: [
    LocationsDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
