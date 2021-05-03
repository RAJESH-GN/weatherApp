import {Component, Input, OnInit} from '@angular/core';
import {WeatherApiResponse} from '../../models/weatherApiResponse';

@Component({
  selector: 'app-expansion-title',
  templateUrl: './expansion-title.component.html',
  styleUrls: ['./expansion-title.component.scss']
})
export class ExpansionTitleComponent {
  @Input() parsedWeatherDetail: WeatherApiResponse;
}
