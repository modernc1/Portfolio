import { Component, inject, HostListener, signal, effect, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ShowcaseService } from '../../services/showcase/showcase.service';
import { ProjectService } from '../../services/projectService/project.service';

@Component({
  selector: 'app-showcase-overlay',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (showcase.isActive()) {
      <div class="showcase-container" (click)="skip()">
        <button class="close-btn" (click)="close($event)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>

        <div class="progress-bar">
          <div class="progress-fill" [style.width.%]="progress()"></div>
        </div>

        <div class="content-wrapper">
          <div class="marketing-beat">
            <h2 class="text-gradient">{{ currentProject().marketingTagline }}</h2>
          </div>

          <div class="project-display" *ngIf="currentProject() as project" [class.is-mobile]="project.category === 'Mobile Applications'">
            <div class="gallery-container">
              @if (project.gallery && project.gallery.length > 0) {
                @for (img of (project.gallery | slice:0:4); track img; let i = $index) {
                  <img [src]="img"
                       [alt]="project.title"
                       class="gallery-img shadow-lg"
                       [class.active]="i === currentImageIndex()"
                       [style.--index]="i">
                }
              } @else {
                <img [src]="project.imageUrl" [alt]="project.title"
                     class="gallery-img active shadow-lg">
              }
            </div>
            <div class="project-info glass-effect" (click)="navigateToProject($event, project)">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description || 'Expertly engineered digital solution.' }}</p>
            </div>
          </div>
        </div>

        <div class="instruction">Click anywhere to skip</div>
      </div>
    }
  `,
  styles: [`
    .showcase-container {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.98);
      backdrop-filter: blur(25px);
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      cursor: pointer;
      overflow: hidden;
      animation: fadeIn 0.5s ease-out;
    }

    .close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
      background: var(--surface-3);
      border: none;
      color: var(--text-main);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      z-index: 10001;
    }

    .close-btn:hover {
      transform: rotate(90deg);
      background: var(--primary);
      color: white;
    }

    .progress-bar {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: rgba(255,255,255,0.1);
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(to right, var(--primary), var(--secondary));
      transition: width 0.1s linear;
    }

    .content-wrapper {
      width: 90%;
      max-width: 1400px;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .marketing-beat {
      text-align: center;
      opacity: 0;
      animation: slideDownFade 0.8s 0.3s forwards;
    }

    .marketing-beat h2 {
      font-size: clamp(1.5rem, 4vw, 3rem);
      margin-bottom: 0;
    }

    .project-display {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }

    .gallery-container {
      width: 100%;
      height: 70vh;
      overflow: hidden;
      border-radius: var(--radius-lg);
      border: 1px solid rgba(255,255,255,0.1);
      box-shadow: 0 40px 80px -20px rgba(0,0,0,0.6);
      background: #000;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .gallery-img {
      position: absolute;
      width: 80%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
      opacity: 0;
      transform: scale(0.8) translateY(50px);
      transition: opacity 1s cubic-bezier(0.23, 1, 0.32, 1),
                  transform 1s cubic-bezier(0.23, 1, 0.32, 1),
                  filter 1s cubic-bezier(0.23, 1, 0.32, 1);
      pointer-events: none;
      filter: blur(10px);
      will-change: transform, opacity, object-position;
    }

    .is-mobile .gallery-img:not([style*="--index: 0"]) {
      object-fit: contain;
    }

    .gallery-img.active {
      opacity: 1;
      transform: scale(1) translateY(0);
      filter: blur(0);
      z-index: 1;
    }

    .gallery-img[style*="--index: 0"].active {
      animation: slowScroll 6s linear forwards;
    }

    @keyframes slowScroll {
      0% { object-position: top center; }
      100% { object-position: bottom center; }
    }

    /* Animation variants based on index for variety */
    .gallery-img[style*="--index: 1"].active { transform: scale(1) translateX(0); }
    .gallery-img[style*="--index: 1"] { transform: scale(0.8) translateX(100px); }

    .gallery-img[style*="--index: 2"].active { transform: scale(1) translateX(0); }
    .gallery-img[style*="--index: 2"] { transform: scale(0.8) translateX(-100px); }

    .project-info {
      position: absolute; /* Changed to Absolute to allow overlap */
      bottom: -1rem; /* Negative position to overflow the container */
      width: fit-content;
      max-width: 80%;
      padding: 0.8rem 1.8rem; /* Smaller padding */
      border-radius: var(--radius-full);
      text-align: center;
      background: var(--primary);
      color: white;
      box-shadow: 0 15px 30px -10px rgba(99, 102, 241, 0.6);
      z-index: 10;
      cursor: pointer;
      transition: 0.3s ease;
    }

    .project-info:hover {
      transform: translateY(-6px) scale(1.05);
    }

    .project-info h3 { margin: 0; font-size: 1.1rem; color: white; }
    .project-info p { margin: 0.2rem 0 0; color: rgba(255, 255, 255, 0.85); font-size: 0.8rem; }

    .instruction {
      position: absolute;
      bottom: 2rem;
      color: var(--text-dim);
      font-size: 0.8rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    /* Animations */
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideDownFade {
      from { opacity: 0; transform: translateY(-30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideUpFade {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ShowcaseOverlayComponent implements OnDestroy {
  showcase = inject(ShowcaseService);
  projectService = inject(ProjectService);
  private router = inject(Router);

  progress = signal(0);
  currentImageIndex = signal(0);
  private timer: any;

  constructor() {
    // Watch for activation to start/stop timer correctly
    effect(() => {
      if (this.showcase.isActive()) {
        this.currentImageIndex.set(0); // Reset for new project
        this.progress.set(0); // Explicitly reset progress on first open
        this.startTimer();
      } else {
        this.stopTimer(true);
      }
    });

    // Watch for project changes within showcase
    effect(() => {
      const idx = this.showcase.currentIndex();
      this.currentImageIndex.set(0);
      this.progress.set(0); // Reset progress on project change
    });
  }

  currentProject() {
    return this.projectService.projects()[this.showcase.currentIndex()];
  }

  navigateToProject(event: MouseEvent, project: any) {
    event.stopPropagation(); // Don't skip the image when clicking the title
    this.showcase.stop(); // Close the overlay

    // Format title precisely as expected by the routes
    const formattedTitle = project.title
      .replace(/\s+/g, '-')       // Spaces to dashes
      .replace(/—/g, '—-')        // Em dash handling for Luxe Perfume
      .replace(/–/g, '–');        // En dash handling for HealthCare Clinic

    this.router.navigate(['/projects', formattedTitle]);
  }

  private getMaxGalleryImages(project: any): number {
    if (!project?.gallery) return 1;
    return Math.min(project.gallery.length, 4);
  }

  skip() {
    const project = this.currentProject();
    const galleryCount = this.getMaxGalleryImages(project);
    const totalDuration = 6000;
    const firstImageDuration = 2000;

    const remainingCount = galleryCount - 1;
    const remainingDuration = totalDuration - firstImageDuration;
    const timePerRemainingImage = remainingCount > 0 ? remainingDuration / remainingCount : 0;

    if (this.currentImageIndex() < galleryCount - 1) {
      // Logic to jump progress to the START of the next image
      const nextIndex = this.currentImageIndex() + 1;
      let newProgress = 0;

      if (nextIndex === 1) {
        newProgress = (firstImageDuration / totalDuration) * 100;
      } else {
        const timeToNext = firstImageDuration + (timePerRemainingImage * (nextIndex - 1));
        newProgress = (timeToNext / totalDuration) * 100;
      }

      this.progress.set(newProgress);
      this.currentImageIndex.set(nextIndex);
    } else {
      // Go to next project
      this.showcase.next(this.projectService.projects().length);
      this.currentImageIndex.set(0);
      this.progress.set(0);
    }

    // Resume timer WITHOUT resetting the progress we just set
    this.startTimer();
  }

  close(event: MouseEvent) {
    event.stopPropagation();
    this.showcase.stop();
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    this.showcase.stop();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  private stopTimer(resetProgress = true) {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    if (resetProgress) {
      this.progress.set(0);
    }
  }

  private startTimer() {
    this.stopTimer(false);

    const project = this.currentProject();
    const galleryCount = this.getMaxGalleryImages(project);
    const totalDuration = 6000;
    const firstImageDuration = 2000; // Reset to 2s based on previous request

    const remainingCount = galleryCount - 1;
    const remainingDuration = totalDuration - firstImageDuration;
    const timePerRemainingImage = remainingCount > 0 ? remainingDuration / remainingCount : 0;

    const step = 50;
    const increment = (step / totalDuration) * 100;

    this.timer = setInterval(() => {
      // Advance progress regardless of image changes
      this.progress.update(p => Math.min(p + increment, 100));

      const galleryLength = this.getMaxGalleryImages(this.currentProject());
      const elapsedTime = (this.progress() / 100) * totalDuration;

      let targetImageIndex = 0;
      if (elapsedTime <= firstImageDuration || galleryLength === 1) {
        targetImageIndex = 0;
      } else {
        const relativeTime = elapsedTime - firstImageDuration;
        targetImageIndex = 1 + Math.min(
          Math.floor(relativeTime / timePerRemainingImage),
          remainingCount - 1
        );
      }

      if (this.currentImageIndex() !== targetImageIndex) {
        this.currentImageIndex.set(targetImageIndex);
      }

      if (this.progress() >= 100) {
        this.showcase.next(this.projectService.projects().length);
        this.currentImageIndex.set(0);
        this.progress.set(0);
      }
    }, step);
  }
}

