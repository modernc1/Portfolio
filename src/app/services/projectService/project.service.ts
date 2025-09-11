import { computed, Injectable, signal } from '@angular/core';
import { Project } from '../../components/project-details/project';
import { RealEstateComponent } from '../../components/portfolio/projects/real-estate/real-estate.component';
import { ShoeStoreComponent } from '../../components/portfolio/projects/shoe-store/shoe-store.component';
import { EStoreComponent } from '../../components/portfolio/projects/e-store/e-store.component';
import { MedicalBlogComponent } from '../../components/portfolio/projects/medical-blog/medical-blog.component';
import { CarsComponent } from '../../components/portfolio/projects/cars/cars.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects = signal<Project[]>([
    // {
    //   id: 1,
    //   title: 'Customizable Responsive Dashboard',
    //   // content: RealEstateComponent
    // },
    {
      id: 2,
      title: 'Responsive Real Estate Web Application',
      imageUrl: 'assets/img/real-estate/real-estate-main-img.jpeg'
      // content: RealEstateComponent
    },
    {
      id: 3,
      title: 'Responsive Shoes E-Commerce Web-Application',
      imageUrl: 'assets/img/shoes-store/shoes-store-main-img.jpeg'
      // content: ShoeStoreComponent
    },
    {
      id: 4,
      title: 'Responsive Electronics E-Commerce Web-Application',
      imageUrl: 'assets/img/e-store/e-storemain-image.png'
      // content: EStoreComponent
    },
    {
      id: 5,
      title: 'Responsive Medical Blog Web-Application',
      imageUrl: 'assets/img/medical-blog/medical-blog-main-img.png'
      // content: MedicalBlogComponent
    },
    {
      id: 6,
      title: 'Car Rental Landing Page',
      imageUrl: 'assets/img/cars/Car_site_main_img.jpeg'
      // content: CarsComponent
    }
  ])

  constructor() { }
}
