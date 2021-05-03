import {Component, Input, OnInit} from '@angular/core';
import {WeatherApiResponse} from '../../models/weatherApiResponse';

@Component({
  selector: 'app-expansion-average-temperature',
  templateUrl: './expansion-average-temperature.component.html',
  styleUrls: ['./expansion-average-temperature.component.scss']
})
export class ExpansionAverageTemperatureComponent {
  @Input() parsedWeatherDetail: WeatherApiResponse;
}
