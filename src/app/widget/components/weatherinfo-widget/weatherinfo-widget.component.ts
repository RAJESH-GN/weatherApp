import {Component, Input} from '@angular/core';
import {WeatherApiResponse} from '../../models/weatherApiResponse';

@Component({
  selector: 'app-weatherinfo-widget',
  templateUrl: './weatherinfo-widget.component.html',
  styleUrls: ['./weatherinfo-widget.component.scss']
})
export class WeatherinfoWidgetComponent {
  @Input() parsedWeatherDetails: WeatherApiResponse[];
  step = 0;

  setStep(index: number): void {
    this.step = index;
  }

  nextStep(): void {
    this.step++;
  }
}
