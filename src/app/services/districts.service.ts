import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistrictsService {

  constructor(private httpClient: HttpClient) { }

  public getDistricts(): Observable<any> {
    return this.httpClient.get(`assets/districts.json`);
  }
}
