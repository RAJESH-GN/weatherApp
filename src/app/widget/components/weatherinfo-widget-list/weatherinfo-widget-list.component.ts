import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, of, Subscription} from 'rxjs';
import {WeatherApiResponse} from '../../models/weatherApiResponse';
import {WeatherDetailsService} from '../../services/weather-details.service';
import {ParsedWeatherCardDetails} from '../../models/parsedWeatherCardDetails';

@Component({
  selector: 'app-weatherinfo-widget-list',
  templateUrl: './weatherinfo-widget-list.component.html',
  styleUrls: ['./weatherinfo-widget-list.component.scss']
})
export class WeatherinfoWidgetListComponent implements OnInit, OnDestroy {
  private cities: Observable<string[]>;
  public parsedWeatherDetails: ParsedWeatherCardDetails[];
  private citiesSubscription: Subscription | undefined;

  constructor(private weatherDetailsService: WeatherDetailsService) {
    this.cities = of(['Amsterdam', 'Rotterdam', 'Berlin', 'London', 'Copenhagen']);
    this.parsedWeatherDetails = [];
  }

  ngOnInit(): void {
    this.citiesSubscription = this.cities.subscribe(cities => {
      cities.map((city) => {
        this.weatherDetailsService.getWeatherInfoWithCity(city).subscribe((response: WeatherApiResponse) => {
          this.parseWeatherDetails(response);
        });
      });
    });
    this.weatherDetailsService.selectedCityLocation.subscribe(res => console.log(res));
  }

  ngOnDestroy(): void {
    this.citiesSubscription?.unsubscribe();
  }

  private parseWeatherDetails(response: WeatherApiResponse): void {
    const temperatureDetails = {...response.main};
    const parsedDetails: ParsedWeatherCardDetails = {
      date: response.dt,
      main: temperatureDetails,
      city: response.name,
      country: response.sys.country,
      type: response.weather[0].main,
      windSpeed: response.wind.speed,
      coord: response.coord
    };
    this.parsedWeatherDetails.push(parsedDetails);
  }
}
