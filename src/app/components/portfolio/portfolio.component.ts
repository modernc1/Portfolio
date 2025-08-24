import { Component, inject } from '@angular/core';
import { ProjectService } from '../../services/projectService/project.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projectService = inject(ProjectService);


}
