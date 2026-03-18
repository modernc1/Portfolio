import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'projects', component: ProjectDetailsComponent, children: [
    // { path: 'Customizable-Responsive-Dashboard'},
    {
      path: 'Luxe-Perfume-High-End-E-commerce-Template',
      loadComponent: () => import('./components/portfolio/projects/luxe-perfume/luxe-perfume.component').then(m => m.LuxePerfumeComponent)
    },
    {
      path: 'ResumeAI-Builder-&-Analyzer',
      loadComponent: () => import('./components/portfolio/projects/resume-ai/resume-ai.component').then(m => m.ResumeAiComponent)
    },
    {
      path: 'Timetables-Pro-Mobile-Application',
      loadComponent: () => import('./components/portfolio/projects/timetables-pro/timetables-pro.component').then(m => m.TimetablesProComponent)
    },
    {
      path: 'Responsive-Real-Estate-Web-Application',
      loadComponent: () => import('./components/portfolio/projects/real-estate/real-estate.component').then(m => m.RealEstateComponent)
    },
    {
      path: 'Responsive-Shoes-E-Commerce-Web-Application',
      loadComponent: () => import('./components/portfolio/projects/shoe-store/shoe-store.component').then(m => m.ShoeStoreComponent)
    },
    {
      path: 'Responsive-Electronics-E-Commerce-Web-Application',
      loadComponent: () => import('./components/portfolio/projects/e-store/e-store.component').then(m => m.EStoreComponent)
    },
    {
      path: 'Responsive-Medical-Blog-Web-Application',
      loadComponent: () => import('./components/portfolio/projects/medical-blog/medical-blog.component').then(m => m.MedicalBlogComponent)
    },
    {
      path: 'Car-Rental-Landing-Page',
      loadComponent: () => import('./components/portfolio/projects/cars/cars.component').then(m => m.CarsComponent)
    },
    {
      path: 'HealthCare-Clinic-–-High-Conversion-Medical-Landing-Page',
      loadComponent: () => import('./components/portfolio/projects/healthcare-clinic/healthcare-clinic.component').then(m => m.HealthcareClinicComponent)
    },
  ]}
];
