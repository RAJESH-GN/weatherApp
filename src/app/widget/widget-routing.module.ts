import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeatherinfoWidgetListComponent} from './components/weatherinfo-widget-list/weatherinfo-widget-list.component';
import {WeatherinfoDetailsComponent} from './components/weatherinfo-details/weatherinfo-details.component';

const routes: Routes = [
  {path: ':name', component: WeatherinfoDetailsComponent, pathMatch: 'full'},
  {path: '', component: WeatherinfoWidgetListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetRoutingModule {
}

export const routingComponents = [WeatherinfoWidgetListComponent, WeatherinfoDetailsComponent];
