import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowcaseService {
  isActive = signal(false);
  currentIndex = signal(0);

  start() {
    this.isActive.set(true);
    this.currentIndex.set(0);
    // Disable scrolling when cinematic is active
    document.body.style.overflow = 'hidden';
  }

  stop() {
    this.isActive.set(false);
    document.body.style.overflow = 'auto';
  }

  next(max: number) {
    const nextIdx = (this.currentIndex() + 1) % max;
    this.currentIndex.set(nextIdx);
  }
}

