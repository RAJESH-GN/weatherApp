import { Component, OnInit } from '@angular/core';
import { CityName, WeatherApiResponse } from '../../models/weather-api-response';
import { WeatherDetailsService } from '../../services/weather-details.service';

@Component({
  selector: 'app-weatherinfo-widget-list',
  templateUrl: './weatherinfo-widget-list.component.html',
  styleUrls: ['./weatherinfo-widget-list.component.scss'],
})
export class WeatherinfoWidgetListComponent implements OnInit {
  public parsedWeatherDetails: WeatherApiResponse[] = [];

  constructor(private weatherDetailsService: WeatherDetailsService) {}

  ngOnInit(): void {
    this.getWeatherDetails();
  }

  private getWeatherDetails(): void {
    ['Amsterdam', 'Rotterdam', 'Berlin', 'London', 'Spain'].forEach(
      (city: CityName) => {
        this.weatherDetailsService
          .getWeatherInfoWithCity(city)
          .subscribe((response: WeatherApiResponse) => {
            this.parsedWeatherDetails.push(response);
          });
      }
    );
  }
}
