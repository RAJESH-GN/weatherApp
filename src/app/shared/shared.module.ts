import {NgModule} from '@angular/core';

import {TemperaturePipe} from './pipes/temperature.pipe';
import {WeatherIconComponent} from './components/weather-icon/weather-icon.component';

const components = [TemperaturePipe,
  WeatherIconComponent];

@NgModule({
  declarations: [
    components
  ],
  exports: [
    ...components
  ]
})
export class SharedModule {
  // tslint:disable-next-line:typedef
  static forRoot() {
    return {
      ngModule: SharedModule,
    };
  }
}
