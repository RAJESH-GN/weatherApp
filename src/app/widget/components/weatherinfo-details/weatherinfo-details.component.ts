import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weatherinfo-details',
  templateUrl: './weatherinfo-details.component.html',
  styleUrls: ['./weatherinfo-details.component.scss']
})
export class WeatherinfoDetailsComponent implements OnInit {
  // https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&
  // exclude=daily,current,minutely,alerts&appid=49278b4a9734f04bead1f100c5ed9fab
  constructor() { }

  ngOnInit(): void {
  }

}
