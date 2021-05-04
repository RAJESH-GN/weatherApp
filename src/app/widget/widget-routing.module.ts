import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherinfoWidgetListComponent } from './components/weatherinfo-widget-list/weatherinfo-widget-list.component';
import {WeatherinfoHourlyDetailsComponent} from './components/weatherinfo-hourly-details/weatherinfo-hourly-details.component';

const routes: Routes = [
  { path: '', component: WeatherinfoWidgetListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidgetRoutingModule {}

export const routingComponents = [
  WeatherinfoWidgetListComponent
];
