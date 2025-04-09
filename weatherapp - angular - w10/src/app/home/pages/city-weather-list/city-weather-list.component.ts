import { Component } from '@angular/core';

@Component({
  selector: 'app-city-weather-list',
  imports: [],
  templateUrl: './city-weather-list.component.html',
  styleUrl: './city-weather-list.component.css'
})
export class CityWeatherListComponent {
  cities = [
    { name: 'Hà Nội', temperature: 32, condition: 'Nắng', icon: '☀️' },
    { name: 'Hồ Chí Minh', temperature: 34, condition: 'Nắng nóng', icon: '🔥' },
    { name: 'Đà Nẵng', temperature: 29, condition: 'Mát mẻ', icon: '⛅' }
  ];
}

