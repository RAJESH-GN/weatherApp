import { Component, Input } from '@angular/core';
import { WeatherApiResponse } from '../../../../models/weather-api-response';

@Component({
  selector: 'app-expansion-additional-info',
  templateUrl: './expansion-additional-info.component.html',
  styleUrls: ['./expansion-additional-info.component.scss'],
})
export class ExpansionAdditionalInfoComponent {
  @Input() public parsedWeatherDetail: WeatherApiResponse;
}
