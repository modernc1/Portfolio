import { computed, Injectable, signal } from '@angular/core';
import { Project } from '../../components/project-details/project';
import { RealEstateComponent } from '../../components/portfolio/projects/real-estate/real-estate.component';
import { ShoeStoreComponent } from '../../components/portfolio/projects/shoe-store/shoe-store.component';
import { EStoreComponent } from '../../components/portfolio/projects/e-store/e-store.component';
import { MedicalBlogComponent } from '../../components/portfolio/projects/medical-blog/medical-blog.component';
import { CarsComponent } from '../../components/portfolio/projects/cars/cars.component';
import { TimetablesProComponent } from '../../components/portfolio/projects/timetables-pro/timetables-pro.component';

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
      title: 'Timetables Pro Mobile Application',
      imageUrl: 'assets/img/timetables-pro/main.png',
      gallery: [
        'assets/img/timetables-pro/main.png',
        'assets/img/timetables-pro/generated-image-78f2d2f6-cc72-4516-9ce0-c7112f086fdb.png',
        'assets/img/timetables-pro/generated-image-de266818-d893-4075-9f63-b552ce7aa1ad.png',
      ]
    },
    {
      id: 3,
      title: 'Responsive Real Estate Web Application',
      imageUrl: 'assets/img/real-estate/real-estate-main-img.jpeg',
      gallery: [
        'assets/img/real-estate/real-estate-main-img.jpeg',
        'assets/img/real-estate/auth.jpeg',
        'assets/img/real-estate/admin-employee-management.jpeg',
        'assets/img/real-estate/clients-request.jpeg',
        'assets/img/real-estate/admin-listing.jpeg',
        'assets/img/real-estate/admin-add-property.jpeg',
        'assets/img/real-estate/properties_listing.jpeg',
        'assets/img/real-estate/admin-previousWork.jpeg'
      ]
    },
    {
      id: 4,
      title: 'Responsive Shoes E-Commerce Web-Application',
      imageUrl: 'assets/img/shoes-store/shoes-store-main-img.jpeg',
      gallery: [
        'assets/img/shoes-store/shoes-store-main-img.jpeg',
        'assets/img/shoes-store/products-page.jpeg',
        'assets/img/shoes-store/reactive-forms.jpeg',
        'assets/img/shoes-store/cart.jpeg',
        'assets/img/shoes-store/tap-payment-integration.jpeg',
        'assets/img/shoes-store/content-management.jpeg'
      ]
    },
    {
      id: 5,
      title: 'Responsive Electronics E-Commerce Web-Application',
      imageUrl: 'assets/img/e-store/e-storemain-image.png',
      gallery: [
        'assets/img/e-store/e-storemain-image.png',
        'assets/img/e-store/features.png',
        'assets/img/e-store/auth.png',
        'assets/img/e-store/e-store-products.png',
        'assets/img/e-store/cart.png',
        'assets/img/e-store/payment.png'
      ]
    },
    {
      id: 6,
      title: 'Responsive Medical Blog Web-Application',
      imageUrl: 'assets/img/medical-blog/medical-blog-main-img.png',
      gallery: [
        'assets/img/medical-blog/medical-blog-main-img.png',
        'assets/img/medical-blog/blog-listing.png',
        'assets/img/medical-blog/details.png',
        'assets/img/medical-blog/admin.png'
      ]
    },
    {
      id: 7,
      title: 'Car Rental Landing Page',
      imageUrl: 'assets/img/cars/Car_site_main_img.jpeg',
      gallery: [
        'assets/img/cars/Car_site_main_img.jpeg'
      ]
    }
  ])

  constructor() { }
}
