import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CityWeatherListComponent } from './pages/city-weather-list/city-weather-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CityWeatherListComponent
  ]
})
export class HomeModule { }
