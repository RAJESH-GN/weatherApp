import { Component, Input } from '@angular/core';
import { WeatherApiResponse } from '../../../models/weather-api-response';

@Component({
  selector: 'app-expansion-title',
  templateUrl: './expansion-title.component.html',
  styleUrls: ['./expansion-title.component.scss'],
})
export class ExpansionTitleComponent {
  @Input() public parsedWeatherDetail: WeatherApiResponse;
}
