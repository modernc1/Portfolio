import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-project-gallery',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectGalleryComponent {
  @Input() images: string[] = [];
  selectedImage: string | null = null;
  isZoomed: boolean = false;

  openLightbox(image: string) {
    this.selectedImage = image;
    this.isZoomed = false;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedImage = null;
    this.isZoomed = false;
    document.body.style.overflow = 'auto';
  }

  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }
}
