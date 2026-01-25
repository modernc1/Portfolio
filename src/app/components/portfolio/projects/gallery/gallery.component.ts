import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class ProjectGalleryComponent {
  @Input() images: string[] = [];
  selectedImage: string | null = null;

  openLightbox(image: string) {
    this.selectedImage = image;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedImage = null;
    document.body.style.overflow = 'auto';
  }
}
