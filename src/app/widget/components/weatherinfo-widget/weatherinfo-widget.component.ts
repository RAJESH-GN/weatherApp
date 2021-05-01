import {Component, Input, OnInit} from '@angular/core';
import {WeatherDetailsService} from '../../services/weather-details.service';
import {WeatherApiResponse} from '../../models/weatherApiResponse';

@Component({
  selector: 'app-weatherinfo-widget',
  templateUrl: './weatherinfo-widget.component.html',
  styleUrls: ['./weatherinfo-widget.component.scss']
})
export class WeatherinfoWidgetComponent implements OnInit {
  @Input() city: string | undefined;
  parsedWeatherDetails: any = {};
  weatherDetails: WeatherApiResponse | undefined;
  tempInCelcius: number | undefined;

  constructor(private weatherDetailsService: WeatherDetailsService) {
  }

  ngOnInit(): void {
    if (this.city) {
      this.weatherDetailsService.getWeatherInfoWithCity(this.city).subscribe((response: WeatherApiResponse) => {
        this.parseWeatherDetails(response);
      });
    }
  }

  private parseWeatherDetails(response: WeatherApiResponse): void {
    const temperatureDetails = {...response.main};
    const dateToMilliSecond = response.dt * 1000;
    let date = new Date(dateToMilliSecond);
    console.log(date);

  }
}
