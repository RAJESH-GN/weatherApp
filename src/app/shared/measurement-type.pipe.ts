import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'measurementType'
})
export class MeasurementTypePipe implements PipeTransform {

  transform(value: unknown, args: string): string {
    if (value){
      return value + ' ' + args;
    }
    return '';
  }

}
