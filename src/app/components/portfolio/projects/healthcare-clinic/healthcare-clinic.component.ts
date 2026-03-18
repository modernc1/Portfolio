import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DetailsSectionComponent } from '../details-section/details-section.component';
import { ProjectGalleryComponent } from '../gallery/gallery.component';
import { ProjectService } from '../../../../services/projectService/project.service';
import { NgIf } from '@angular/common';
import { Project } from '../../../project-details/project';

@Component({
  selector: 'app-healthcare-clinic',
  standalone: true,
  imports: [NgIf, DetailsSectionComponent, ProjectGalleryComponent],
  templateUrl: './healthcare-clinic.component.html',
  styleUrl: './healthcare-clinic.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HealthcareClinicComponent {
  projectService = inject(ProjectService);
  project = this.projectService.projects().find((p: Project) => p.id === 7);
}
