import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityWeatherListComponent } from './pages/city-weather-list/city-weather-list.component';

const routes: Routes = [
  { path: '', component: CityWeatherListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
