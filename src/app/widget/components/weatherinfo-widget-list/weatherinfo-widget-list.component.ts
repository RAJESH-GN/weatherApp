import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-weatherinfo-widget-list',
  templateUrl: './weatherinfo-widget-list.component.html',
  styleUrls: ['./weatherinfo-widget-list.component.scss']
})
export class WeatherinfoWidgetListComponent implements OnInit {
  cities: Observable<string[]>;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.cities = of(['Amsterdam', 'Rotterdam', 'Berlin', 'Belgium', 'Italy']);
  }

  ngOnInit(): void {
  }
}
