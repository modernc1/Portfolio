import { Component, inject } from '@angular/core';
import { DetailsSectionComponent } from '../details-section/details-section.component';
import { ProjectGalleryComponent } from '../gallery/gallery.component';
import { ProjectService } from '../../../../services/projectService/project.service';
import { CommonModule } from '@angular/common';
import { Project } from '../../../project-details/project';

@Component({
  selector: 'app-e-store',
  standalone: true,
  imports: [CommonModule, DetailsSectionComponent, ProjectGalleryComponent],
  templateUrl: './e-store.component.html',
  styleUrl: './e-store.component.css'
})
export class EStoreComponent {
  projectService = inject(ProjectService);
  project = this.projectService.projects().find((p: Project) => p.id === 5);
}
