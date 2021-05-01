import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {WeatherDetailsService} from '../../services/weather-details.service';
import {Coord} from '../../models/weatherApiResponse';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-weatherinfo-details',
  templateUrl: './weatherinfo-details.component.html',
  styleUrls: ['./weatherinfo-details.component.scss']
})
export class WeatherinfoDetailsComponent implements OnInit, OnDestroy {
  private selectedCitySubscription: Subscription | undefined;
  constructor(private weatherDetailsService: WeatherDetailsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.selectedCitySubscription = this.weatherDetailsService.selectedCityLocation.subscribe((coord: Coord | undefined) => {
      if (coord){
        this.weatherDetailsService.getHourlyInfoOfCity(coord.lat, coord.lon).subscribe(res => console.log(res));
      }
    });
  }

  ngOnDestroy(): void {
    this.selectedCitySubscription?.unsubscribe();
  }
}
