import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cloudType'
})
export class CloudTypePipe implements PipeTransform {
  private iconClass = 'fa ';
  transform(value: string, arg?: string): string {
    arg ? this.iconClass += arg : this.iconClass += 'fa-5x';
    switch (value.toLowerCase()){
      case 'cloudy': return this.iconClass + ' fa-cloud';
      case 'rain': return this.iconClass + ' fa-cloud-rain';
      case 'clear': return this.iconClass + ' fa-sun';
      default: return this.iconClass + ' fa-cloud-sun';
    }
  }

}
