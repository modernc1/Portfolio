import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectDetailViewComponent } from './components/project-details/project-detail-view.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'projects', component: ProjectDetailsComponent, children: [
    {
      path: ':slug',
      component: ProjectDetailViewComponent
    }
  ]}
];
