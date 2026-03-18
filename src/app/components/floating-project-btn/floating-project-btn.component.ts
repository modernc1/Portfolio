import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseService } from '../../services/showcase/showcase.service';

@Component({
  selector: 'app-floating-project-btn',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fab-wrapper" [class.hidden]="showcase.isActive()">
      <!-- The Animated Background Explosion -->
      @if (isExpanding()) {
        <div class="explosion-ring active"></div>
      }

      <!-- The Button itself -->
      <button
        class="fab-btn glass-effect"
        (click)="navigateToProjects()"
        [attr.aria-label]="'View Projects'">
        <div class="btn-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <span class="btn-text">Cinematic View</span>
        </div>
      </button>
    </div>
  `,
  styles: [`
    .fab-wrapper {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 1000;
      transition: all 0.5s var(--transition-base);
    }

    .fab-wrapper.hidden {
      opacity: 0;
      transform: translateY(30px) scale(0.85);
      pointer-events: none;
    }

    .fab-btn {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.85rem 1.75rem;
      border-radius: var(--radius-full);
      color: var(--text-main);
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.15),
                  0 0 0 1px var(--border-subtle);
      cursor: pointer;
      transition: all 0.3s var(--transition-base);
      overflow: hidden;
      border: none;
      outline: none;
    }

    .fab-btn::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 0;
    }

    .fab-btn:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px -12px rgba(99, 102, 241, 0.25);
    }

    .fab-btn:hover::before {
      opacity: 0.08;
    }

    .btn-content {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    .btn-text {
      font-family: 'Inter', sans-serif;
    }

    .explosion-ring {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      width: 80px;
      height: 80px;
      background: radial-gradient(circle, var(--primary) 0%, transparent 75%);
      border-radius: 50%;
      opacity: 0;
      pointer-events: none;
      z-index: -1;
    }

    .explosion-ring.active {
      animation: explode 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    }

    @keyframes explode {
      0% { transform: translate(-50%, -50%) scale(0); opacity: 0.8; }
      100% { transform: translate(-50%, -50%) scale(40); opacity: 0; }
    }

    @media (max-width: 640px) {
      .btn-text { display: none; }
      .fab-btn { padding: 1rem; border-radius: 50%; }
      .fab-wrapper { bottom: 1.5rem; right: 1.5rem; }
    }
  `]
})
export class FloatingProjectBtnComponent {
  showcase = inject(ShowcaseService);
  isExpanding = signal(false);

  navigateToProjects() {
    this.isExpanding.set(true);

    setTimeout(() => {
      this.showcase.start();

      // Cleanup animation
      setTimeout(() => {
        this.isExpanding.set(false);
      }, 1000);
    }, 400);
  }
}

