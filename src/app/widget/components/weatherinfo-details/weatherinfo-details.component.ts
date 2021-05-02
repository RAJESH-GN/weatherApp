import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WeatherDetailsService} from '../../services/weather-details.service';
import {Coord} from '../../models/weatherApiResponse';
import {Observable, Subject, Subscription} from 'rxjs';
import {Hourly} from '../../models/weatherHourlyResponse';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-weatherinfo-details',
  templateUrl: './weatherinfo-details.component.html',
  styleUrls: ['./weatherinfo-details.component.scss']
})
export class WeatherinfoDetailsComponent implements OnInit {
  private selectedCitySubscription: Subscription | undefined;
  public hourlyWeather: Observable<Hourly[]> | undefined;
  @Input() coord: Coord | undefined;
  private destroy: Subject<boolean> = new Subject<boolean>();

  constructor(private weatherDetailsService: WeatherDetailsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.hourlyWeather =  this.weatherDetailsService.getHourlyInfoOfCity(this.coord?.lat, this.coord.lon)
              .pipe(map(weatherHourlyResponse => {
                  const hourly = [...weatherHourlyResponse.hourly];
                  return hourly.filter(hourDate => !(new Date(hourDate.dt * 1000).getDate() > new Date().getDate()));
                }));
  }
}
