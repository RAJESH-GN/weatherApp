import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  /**
   *  Transforms the given input to temperature units
   * @param value pass the Value which needs to be transformed
   * @param arg optional param by default shows degree celcius can be used in future for different conversions
   * @returns a string with measurements attached to value passed
   */
  transform(value: string, arg?: string): string {
    return value + '°C';
  }
}
