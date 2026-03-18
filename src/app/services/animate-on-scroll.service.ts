import { Injectable, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimateOnScrollService {
  private observer: IntersectionObserver | null = null;

  constructor(private router: Router) {
    // Re-initialize on every navigation end to handle lazy-loaded content
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      setTimeout(() => this.init(), 100);
    });
  }

  public init() {
    if (this.observer) {
      this.observer.disconnect();
    }

    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        (entry.target as HTMLElement).style.opacity = '1';
        (entry.target as HTMLElement).style.transform = 'translateY(0) translateX(0)';

        if (entry.target.classList.contains('skill-category')) {
          (entry.target as HTMLElement).style.animation = 'slideInLeft 0.8s forwards cubic-bezier(0.2, 0.8, 0.2, 1)';
        }

        this.observer?.unobserve(entry.target);
      });
    }, appearOptions);

    const faders = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .skill-category, .portfolio-item, .contact-form');
    faders.forEach(fader => {
      (fader as HTMLElement).style.transition = 'none';
      this.observer?.observe(fader);
    });
  }
}
