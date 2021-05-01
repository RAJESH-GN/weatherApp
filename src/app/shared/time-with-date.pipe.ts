import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeWithDate'
})
export class TimeWithDatePipe implements PipeTransform {

  transform(unixDate: number | undefined, ...args: unknown[]): string {
    if (unixDate) {
      return this.getTime(new Date(unixDate * 1000)); // to convert Unix date to milli second
    }
    return '';
  }

  getTime(date: any): string {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
}
