import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WeatherDistrictComponent } from './pages/weather-district/weather-district.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'weatherDistrict/:name/:identifier', component: WeatherDistrictComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
