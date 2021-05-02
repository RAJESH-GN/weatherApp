import {NgModule} from '@angular/core';
import {TemperaturePipe} from './temperature.pipe';
import { TimeWithDatePipe } from './time-with-date.pipe';
import { MeasurementTypePipe } from './measurement-type.pipe';
import { CloudTypePipe } from './cloud-type.pipe';


@NgModule({
  declarations: [
    TemperaturePipe,
    TimeWithDatePipe,
    MeasurementTypePipe,
    CloudTypePipe
  ],
    exports: [
        TemperaturePipe,
        TimeWithDatePipe,
        MeasurementTypePipe,
        CloudTypePipe
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
