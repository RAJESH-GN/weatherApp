import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  routingComponents,
  WidgetRoutingModule,
} from './widget-routing.module';
import { WeatherinfoWidgetComponent } from './components/weatherinfo-widget/weatherinfo-widget.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherDetailsService } from './services/weather-details.service';
import { MaterialModule } from '../material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WeatherinfoWidgetComponent, routingComponents],
  imports: [
    CommonModule,
    HttpClientModule,
    WidgetRoutingModule,
    FontAwesomeModule,
    SharedModule,
    MaterialModule,
  ],
  providers: [WeatherDetailsService],
})
export class WidgetModule {}
