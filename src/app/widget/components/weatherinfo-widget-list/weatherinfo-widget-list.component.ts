import { Component, OnInit } from '@angular/core';
import {
  CityName,
  WeatherApiResponse,
} from '../../models/weather-api-response';
import { WeatherDetailsService } from '../../services/weather-details.service';

@Component({
  selector: 'app-weatherinfo-widget-list',
  templateUrl: './weatherinfo-widget-list.component.html',
  styleUrls: ['./weatherinfo-widget-list.component.scss'],
})
export class WeatherinfoWidgetListComponent implements OnInit {
  public parsedWeatherDetails: WeatherApiResponse[] = [];

  constructor(private weatherDetailsService: WeatherDetailsService) {}

  /**
   *  To get the details on load of the component calling getWeatherDetails
   */
  ngOnInit(): void {
    this.getWeatherDetails();
  }

  /**
   * Gets the weather information for the 5 cities and updates the view with the fetched details
   */
  private getWeatherDetails(): void {
    ['Amsterdam', 'Paris', 'Berlin', 'London', 'Madrid'].forEach(
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
