import {NgModule} from '@angular/core';
import {TemperaturePipe} from './temperature.pipe';
import { TimeWithDatePipe } from './time-with-date.pipe';
import { MeasurementTypePipe } from './measurement-type.pipe';


@NgModule({
  declarations: [
    TemperaturePipe,
    TimeWithDatePipe,
    MeasurementTypePipe
  ],
    exports: [
        TemperaturePipe,
        TimeWithDatePipe,
        MeasurementTypePipe
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
