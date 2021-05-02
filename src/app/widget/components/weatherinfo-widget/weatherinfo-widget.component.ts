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
  @Input() parsedWeatherDetails: Array<ParsedWeatherCardDetails> = [];
  public showHourlyDetails = false;
  step = 0;

  constructor(private router: Router, private route: ActivatedRoute, private weatherDetailsService: WeatherDetailsService) {
  }

  setStep(index: number): void {
    this.step = index;
  }

  nextStep(): void {
    this.step++;
  }

  public handleClickEvent(weatherDetails: ParsedWeatherCardDetails | undefined): void {
    this.showHourlyDetails = true;
    this.weatherDetailsService.selectedCityLocation.next(weatherDetails?.coord);
  }
}
