import {Component, Input, OnInit} from '@angular/core';
import {ParsedWeatherCardDetails} from '../../models/parsedWeatherCardDetails';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-weatherinfo-widget',
  templateUrl: './weatherinfo-widget.component.html',
  styleUrls: ['./weatherinfo-widget.component.scss']
})
export class WeatherinfoWidgetComponent implements OnInit {
  @Input() weatherDetails: ParsedWeatherCardDetails | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  handleClickEvent(weatherDetails: ParsedWeatherCardDetails | undefined): void {
    this.router.navigate([weatherDetails?.city], {relativeTo: this.route});
    console.log(weatherDetails);
  }
}
