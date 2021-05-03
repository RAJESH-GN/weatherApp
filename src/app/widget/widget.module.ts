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
import { ExpansionTitleComponent } from './components/expansion-title/expansion-title.component';
import { ExpansionDescriptionComponent } from './components/expansion-description/expansion-description.component';
import { ExpansionAdditionalInfoComponent } from './components/expansion-additional-info/expansion-additional-info.component';
import { ExpansionAverageTemperatureComponent } from './components/expansion-average-temperature/expansion-average-temperature.component';

@NgModule({
  declarations: [WeatherinfoWidgetComponent, routingComponents, ExpansionTitleComponent, ExpansionDescriptionComponent, ExpansionAdditionalInfoComponent, ExpansionAverageTemperatureComponent],
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
