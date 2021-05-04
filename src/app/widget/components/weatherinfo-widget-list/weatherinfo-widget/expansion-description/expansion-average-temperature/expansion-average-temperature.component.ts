import { Component, Input, OnInit } from '@angular/core';
import { WeatherApiResponse } from '../../../../../models/weather-api-response';

@Component({
  selector: 'app-expansion-average-temperature',
  templateUrl: './expansion-average-temperature.component.html',
  styleUrls: ['./expansion-average-temperature.component.scss'],
})
export class ExpansionAverageTemperatureComponent {
  @Input() public parsedWeatherDetail: WeatherApiResponse;
}
