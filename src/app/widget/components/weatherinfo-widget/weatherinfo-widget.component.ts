import {Component, Input, OnInit} from '@angular/core';
import {WeatherDetailsService} from '../../services/weather-details.service';
import {WeatherApiResponse} from '../../models/weatherApiResponse';
import {ParsedWeatherCardDetails} from '../../models/parsedWeatherCardDetails';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-weatherinfo-widget',
  templateUrl: './weatherinfo-widget.component.html',
  styleUrls: ['./weatherinfo-widget.component.scss']
})
export class WeatherinfoWidgetComponent implements OnInit {
  @Input() weatherDetails: ParsedWeatherCardDetails | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  handleClickEvent(weatherDetails: ParsedWeatherCardDetails | undefined): void {
    console.log(weatherDetails);
  }
}
