import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectService } from '../../services/projectService/project.service';
import { Project } from '../project-details/project';
import { ProjectGalleryComponent } from '../portfolio/projects/gallery/gallery.component';

@Component({
  selector: 'app-project-detail-view',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectGalleryComponent],
  templateUrl: './project-detail-view.component.html',
  styleUrl: './project-detail-view.component.css'
})
export class ProjectDetailViewComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);

  project = signal<Project | undefined>(undefined);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        // Find project by slug (converted from title)
        const foundProject = this.projectService.projects().find(p =>
          p.title.replaceAll(' ', '-').toLowerCase() === slug.toLowerCase()
        );
        this.project.set(foundProject);
      }
    });
  }
}
