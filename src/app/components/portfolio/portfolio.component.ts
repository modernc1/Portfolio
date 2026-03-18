import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ProjectService } from '../../services/projectService/project.service';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {
  projectService = inject(ProjectService);

  selectedCategory = signal<'All' | 'Web Applications' | 'Mobile Applications'>('All');

  filteredProjects = computed(() => {
    const category = this.selectedCategory();
    const allProjects = this.projectService.projects();
    if (category === 'All') return allProjects;
    return allProjects.filter(p => p.category === category);
  });

  setCategory(category: 'All' | 'Web Applications' | 'Mobile Applications') {
    this.selectedCategory.set(category);
  }
}
