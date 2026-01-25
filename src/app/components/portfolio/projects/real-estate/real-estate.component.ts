import { Component, inject } from '@angular/core';
import { DetailsSectionComponent } from '../details-section/details-section.component';
import { ProjectGalleryComponent } from '../gallery/gallery.component';
import { ProjectService } from '../../../../services/projectService/project.service';
import { CommonModule } from '@angular/common';
import { Project } from '../../../project-details/project';

@Component({
  selector: 'app-real-estate',
  standalone: true,
  imports: [CommonModule, DetailsSectionComponent, ProjectGalleryComponent],
  templateUrl: './real-estate.component.html',
  styleUrl: './real-estate.component.css'
})
export class RealEstateComponent {
  projectService = inject(ProjectService);
  project = this.projectService.projects().find((p: Project) => p.id === 3);
}
