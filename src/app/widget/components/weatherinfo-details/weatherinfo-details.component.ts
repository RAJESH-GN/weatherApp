import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {WeatherDetailsService} from '../../services/weather-details.service';

@Component({
  selector: 'app-weatherinfo-details',
  templateUrl: './weatherinfo-details.component.html',
  styleUrls: ['./weatherinfo-details.component.scss']
})
export class WeatherinfoDetailsComponent implements OnInit {
  constructor(private weatherDetailsService: WeatherDetailsService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((param: ParamMap) => console.log(param.get('name')));
  }

  ngOnInit(): void {
    this.weatherDetailsService.getHourlyInfoOfCity(51.50, 0.12).subscribe(res => console.log(res));
  }

}
