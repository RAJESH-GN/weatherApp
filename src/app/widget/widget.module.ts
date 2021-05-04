import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { routingComponents, WidgetRoutingModule} from './widget-routing.module';
import { WeatherDetailsService } from './services/weather-details.service';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import {WeatherinfoHourlyDetailsComponent} from './components/weatherinfo-hourly-details/weatherinfo-hourly-details.component';
import {ExpansionTitleComponent} from './components/weatherinfo-widget-list/weatherinfo-widget/expansion-title/expansion-title.component';
import {ExpansionAdditionalInfoComponent} from './components/weatherinfo-widget-list/weatherinfo-widget/expansion-description/expansion-additional-info/expansion-additional-info.component';
import {ExpansionAverageTemperatureComponent} from './components/weatherinfo-widget-list/weatherinfo-widget/expansion-description/expansion-average-temperature/expansion-average-temperature.component';
import {ExpansionDescriptionComponent} from './components/weatherinfo-widget-list/weatherinfo-widget/expansion-description/expansion-description.component';
import {WeatherinfoWidgetComponent} from './components/weatherinfo-widget-list/weatherinfo-widget/weatherinfo-widget.component';

@NgModule({
  declarations: [
    WeatherinfoWidgetComponent,
    routingComponents,
    WeatherinfoHourlyDetailsComponent,
    ExpansionTitleComponent,
    ExpansionDescriptionComponent,
    ExpansionAdditionalInfoComponent,
    ExpansionAverageTemperatureComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    WidgetRoutingModule,
    SharedModule,
    MaterialModule,
  ],
  providers: [WeatherDetailsService],
})
export class WidgetModule {}
