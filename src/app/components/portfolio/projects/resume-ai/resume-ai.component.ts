import { Component, inject } from '@angular/core';
import { DetailsSectionComponent } from '../details-section/details-section.component';
import { ProjectGalleryComponent } from '../gallery/gallery.component';
import { ProjectService } from '../../../../services/projectService/project.service';
import { CommonModule } from '@angular/common';
import { Project } from '../../../project-details/project';

@Component({
  selector: 'app-resume-ai',
  standalone: true,
  imports: [CommonModule, DetailsSectionComponent, ProjectGalleryComponent],
  templateUrl: './resume-ai.component.html',
  styleUrl: './resume-ai.component.css'
})
export class ResumeAiComponent {
  projectService = inject(ProjectService);
  project = this.projectService.projects().find((p: Project) => p.id === 8);
}
