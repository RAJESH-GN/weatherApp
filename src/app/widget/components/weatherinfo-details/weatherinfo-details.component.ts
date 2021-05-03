import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  pluck } from 'rxjs/operators';

import { WeatherDetailsService } from '../../services/weather-details.service';
import {Coord} from '../../models/weather-api-response';
import {Hourly} from '../../models/weather-hourly-response';

@Component({
  selector: 'app-weatherinfo-details',
  templateUrl: './weatherinfo-details.component.html',
  styleUrls: ['./weatherinfo-details.component.scss'],
})
export class WeatherinfoDetailsComponent implements OnInit {
  @Input() coord: Coord;
  public hourlyWeather: Observable<Hourly[]>;

  constructor(private weatherDetailsService: WeatherDetailsService) {}

  ngOnInit(): void {
    this.hourlyWeather = this.weatherDetailsService
      .getHourlyInfoOfCity(this.coord?.lat, this.coord?.lon)
      .pipe(pluck('hourly'));
  }
}
