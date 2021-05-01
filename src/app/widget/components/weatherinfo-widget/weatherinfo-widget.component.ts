import {Component, Input, OnInit} from '@angular/core';
import {ParsedWeatherCardDetails} from '../../models/parsedWeatherCardDetails';
import {ActivatedRoute, Router} from '@angular/router';
import {WeatherDetailsService} from '../../services/weather-details.service';

@Component({
  selector: 'app-weatherinfo-widget',
  templateUrl: './weatherinfo-widget.component.html',
  styleUrls: ['./weatherinfo-widget.component.scss']
})
export class WeatherinfoWidgetComponent {
  @Input() weatherDetails: ParsedWeatherCardDetails | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private weatherDetailsService: WeatherDetailsService) {
  }

  public handleClickEvent(weatherDetails: ParsedWeatherCardDetails | undefined): void {
    this.weatherDetailsService.selectedCityLocation.next(weatherDetails?.coord);
    this.router.navigate([weatherDetails?.city], {relativeTo: this.route});
  }
}
