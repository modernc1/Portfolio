import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RealEstateComponent } from './components/portfolio/projects/real-estate/real-estate.component';
import { ShoeStoreComponent } from './components/portfolio/projects/shoe-store/shoe-store.component';
import { EStoreComponent } from './components/portfolio/projects/e-store/e-store.component';
import { MedicalBlogComponent } from './components/portfolio/projects/medical-blog/medical-blog.component';
import { CarsComponent } from './components/portfolio/projects/cars/cars.component';
import { TimetablesProComponent } from './components/portfolio/projects/timetables-pro/timetables-pro.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'projects', component: ProjectDetailsComponent, children: [
    // { path: 'Customizable-Responsive-Dashboard'},
    { path: 'Timetables-Pro-Mobile-Application', component: TimetablesProComponent},
    { path: 'Responsive-Real-Estate-Web-Application', component: RealEstateComponent},
    { path: 'Responsive-Shoes-E-Commerce-Web-Application', component: ShoeStoreComponent},
    { path: 'Responsive-Electronics-E-Commerce-Web-Application', component: EStoreComponent},
    { path: 'Responsive-Medical-Blog-Web-Application', component: MedicalBlogComponent},
    { path: 'Car-Rental-Landing-Page', component: CarsComponent},
  ]}
];
