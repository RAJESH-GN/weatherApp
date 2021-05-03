import {Component, Input, OnInit} from '@angular/core';
import {WeatherApiResponse} from '../../models/weatherApiResponse';

@Component({
  selector: 'app-expansion-additional-info',
  templateUrl: './expansion-additional-info.component.html',
  styleUrls: ['./expansion-additional-info.component.scss']
})
export class ExpansionAdditionalInfoComponent{
  @Input() parsedWeatherDetail: WeatherApiResponse;

}
