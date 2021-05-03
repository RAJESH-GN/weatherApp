import { Component, Input } from '@angular/core';
import { WeatherApiResponse } from '../../../models/weather-api-response';

@Component({
  selector: 'app-expansion-description',
  templateUrl: './expansion-description.component.html',
  styleUrls: ['./expansion-description.component.scss'],
})
export class ExpansionDescriptionComponent {
  @Input() parsedWeatherDetail: WeatherApiResponse;
}
