import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'measurementType'
})
export class MeasurementTypePipe implements PipeTransform {

  transform(value: number| undefined, args: string): string {
    return value ? value + ' ' + args : '';
  }

}
