import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'wisy-weather-district',
  templateUrl: './weather-district.component.html',
  styleUrls: ['./weather-district.component.scss']
})
export class WeatherDistrictComponent implements OnInit {

  name!: string;
  identifier: string;
  forecast: any;
  names: string[] = [];
  temperatures: number[] = [];
  public chart!: Chart;

  constructor
  (
    private activateRoute: ActivatedRoute,
    private weatherService: WeatherService,
  )
  {

    this.name = this.activateRoute.snapshot.paramMap.get('name') || '';
    this.identifier = this.activateRoute.snapshot.paramMap.get('identifier') || '';

  }

  async ngOnInit() {
    this.getTemperatureOfDistrict();
  }

  private getTemperatureOfDistrict() {
    this.weatherService.getTemperatures(this.identifier).subscribe(data => {
      this.forecast = data.properties.periods;
      console.log(data);

      this.names = this.forecast.map((forecast: { name: string; }) => forecast.name);
      // console.log(this.names);

      this.temperatures = this.forecast.map((forecast: { temperature: number; }) => forecast.temperature);
      // console.log(this.temperatures);
      
      this.loadChart();
    })
  }

  private loadChart() {
    const data = {
      labels: this.names,
      datasets: [{
        label: 'Temperature Dataset',
        data: this.temperatures,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
    this.chart = new Chart("chart", {
      type: 'line' as ChartType,
      data
    });
  }
}
