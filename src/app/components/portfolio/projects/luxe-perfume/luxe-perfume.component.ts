import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { DetailsSectionComponent } from '../details-section/details-section.component';
import { ProjectGalleryComponent } from '../gallery/gallery.component';
import { ProjectService } from '../../../../services/projectService/project.service';
import { Project } from '../../../project-details/project';

@Component({
  selector: 'app-luxe-perfume',
  standalone: true,
  imports: [NgIf, DetailsSectionComponent, ProjectGalleryComponent],
  templateUrl: './luxe-perfume.component.html',
  styleUrls: ['./luxe-perfume.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LuxePerfumeComponent {
  projectService = inject(ProjectService);
  project = this.projectService.projects().find((p: Project) => p.id === 9);
}

