import { Component, Inject } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-city-weather',
  templateUrl: './currentweather.component.html'
})
export class CityWeatherComponent {
  city = 'Hanoi';
  weatherData: any;
  isLoading = false;
  error = '';

  constructor(@Inject(WeatherService) private weatherService: WeatherService) {}

  fetchWeather() {
    this.isLoading = true;
    this.weatherService.getWeatherByCity(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.error = '';
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Không tìm thấy thành phố!';
        this.weatherData = null;
        this.isLoading = false;
      }
    });
  }
}
