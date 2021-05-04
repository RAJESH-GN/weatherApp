import { NgModule } from '@angular/core';

import { TemperaturePipe } from './pipes/temperature.pipe';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptorsService } from './services/request-interceptors.service';

const components = [TemperaturePipe, WeatherIconComponent];

@NgModule({
  declarations: [components],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorsService,
      multi: true,
    },
  ],
  exports: [...components],
})
export class SharedModule {}
