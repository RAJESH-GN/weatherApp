import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { WeatherDetailsService } from '../../services/weather-details.service';
import { Coord } from '../../models/weather-api-response';
import { Hourly } from '../../models/weather-hourly-response';

@Component({
  selector: 'app-weatherinfo-hourly-details',
  templateUrl: './weatherinfo-hourly-details.component.html',
  styleUrls: ['./weatherinfo-hourly-details.component.scss'],
})
export class WeatherinfoHourlyDetailsComponent implements OnInit {
  @Input() public coord: Coord;
  public hourlyWeather: Observable<Hourly[]>;

  constructor(private weatherDetailsService: WeatherDetailsService) {}

  /**
   * Once the component is loaded will make a call to get hourly Details with lat and lon provided in coordinates
   */
  ngOnInit(): void {
    this.hourlyWeather = this.weatherDetailsService
      .getHourlyInfoOfCity(this.coord?.lat, this.coord?.lon)
      .pipe(pluck('hourly'));
  }
}
