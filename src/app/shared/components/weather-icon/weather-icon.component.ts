import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss']
})
export class WeatherIconComponent {
  @Input() iconName: string;
  @Input() iconSize = 2;
  @Input() imageSize = 'small';
}
