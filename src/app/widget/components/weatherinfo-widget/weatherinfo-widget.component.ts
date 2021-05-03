import { Component, Input } from '@angular/core';

import { WeatherApiResponse } from '../../models/weather-api-response';

@Component({
  selector: 'app-weatherinfo-widget',
  templateUrl: './weatherinfo-widget.component.html',
  styleUrls: ['./weatherinfo-widget.component.scss'],
})
export class WeatherinfoWidgetComponent {
  @Input() public parsedWeatherDetails: WeatherApiResponse[];
  public step = 0;

  /**
   * Setter method to set step variable
   * @param index index of the panel to open
   */
  setStep(index: number): void {
    this.step = index;
  }

  /**
   * This method updates the step value by 1 so as to open the active panel
   */
  nextStep(): void {
    this.step++;
  }
}
