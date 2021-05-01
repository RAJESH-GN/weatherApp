import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';
import {WeatherApiResponse} from '../../models/weatherApiResponse';
import {WeatherDetailsService} from '../../services/weather-details.service';
import {ParsedWeatherCardDetails} from '../../models/parsedWeatherCardDetails';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-weatherinfo-widget-list',
  templateUrl: './weatherinfo-widget-list.component.html',
  styleUrls: ['./weatherinfo-widget-list.component.scss']
})
export class WeatherinfoWidgetListComponent implements OnInit {
  cities: Observable<string[]>;
  parsedWeatherDetails: ParsedWeatherCardDetails[];

  constructor(private weatherDetailsService: WeatherDetailsService) {
    this.cities = of(['Amsterdam', 'Rotterdam', 'Berlin', 'London', 'Copenhagen']);
    this.parsedWeatherDetails = [];
  }

  ngOnInit(): void {
    this.cities.subscribe(cities => {
      cities.map((city) => {
        this.weatherDetailsService.getWeatherInfoWithCity(city).subscribe((response: WeatherApiResponse) => {
          this.parseWeatherDetails(response);
        });
      });
    });
  }

  private parseWeatherDetails(response: WeatherApiResponse): void {
    const temperatureDetails = {...response.main};
    // TODO: Make a pipe available for this Date in HTML
    /*const dateToMilliSecond = response.dt * 1000;
    let date = new Date(dateToMilliSecond);*/
    // TODO: to create a pipe for timezone
    // console.log(date.getHours(), date.getMinutes(), date.getSeconds(), date.getTimezoneOffset());
    const parsedDetails: ParsedWeatherCardDetails = {
      date: response.dt,
      main: temperatureDetails,
      city: response.name,
      country: response.sys.country,
      type: response.weather[0].main
    };
    this.parsedWeatherDetails.push(parsedDetails);
  }
}
