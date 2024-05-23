import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherDistrictComponent } from './pages/weather-district/weather-district.component';
import { CardDistrictComponent } from './components/card-district/card-district.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherDistrictComponent,
    CardDistrictComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
