import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  baseURL: string = 'https://api.weather.gov/gridpoints/';
  finishUrl: string = '/31,80/forecast';

  constructor(private httpClient: HttpClient) { }

  public getTemperatures(name: string): Observable<any> {
    return this.httpClient.get(this.baseURL + name + this.finishUrl);
  }
}
