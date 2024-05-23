import { Component, OnInit } from '@angular/core';
import { District } from 'src/app/interfaces/districts';
import { DistrictsService } from 'src/app/services/districts.service';

@Component({
  selector: 'wisy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  districts!: District[];

  constructor
  (
    private districtsService: DistrictsService
  ) { }

  ngOnInit(): void {
    this.districtsService.getDistricts().subscribe(data => {
      this.districts = data.districts;
      console.log(this.districts);
      
    });
  }

}
