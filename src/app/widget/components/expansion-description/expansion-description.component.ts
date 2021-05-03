import {Component, Input, OnInit} from '@angular/core';
import {WeatherApiResponse} from '../../models/weatherApiResponse';

@Component({
  selector: 'app-expansion-description',
  templateUrl: './expansion-description.component.html',
  styleUrls: ['./expansion-description.component.scss']
})
export class ExpansionDescriptionComponent{
  @Input() parsedWeatherDetail: WeatherApiResponse;
}
