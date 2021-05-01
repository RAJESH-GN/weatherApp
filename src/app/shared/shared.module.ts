import {NgModule} from '@angular/core';
import {TemperaturePipe} from './temperature.pipe';
import { TimeWithDatePipe } from './time-with-date.pipe';


@NgModule({
  declarations: [
    TemperaturePipe,
    TimeWithDatePipe
  ],
  exports: [
    TemperaturePipe,
    TimeWithDatePipe
  ],
  imports: [
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
