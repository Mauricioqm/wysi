import { Component, Input, OnInit } from '@angular/core';
import { District } from 'src/app/interfaces/districts';

@Component({
  selector: 'wisy-card-district',
  templateUrl: './card-district.component.html',
  styleUrls: ['./card-district.component.scss']
})
export class CardDistrictComponent {
  @Input() district!: District;

  constructor() { }

}
