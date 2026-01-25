import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-section',
  imports: [CommonModule],
  templateUrl: './details-section.component.html',
  styleUrl: './details-section.component.css'
})
export class DetailsSectionComponent {
    @Input() title: string = '';
    @Input() description: string = '';
}
