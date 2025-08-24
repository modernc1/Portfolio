import { Component } from '@angular/core';
import { DetailsSectionComponent } from '../details-section/details-section.component';

@Component({
  selector: 'app-cars',
  imports: [DetailsSectionComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  image: string = '/assets/img/cars/Car_site_main_img.jpeg'
}
