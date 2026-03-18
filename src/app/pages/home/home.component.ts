import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { FloatingProjectBtnComponent } from '../../components/floating-project-btn/floating-project-btn.component';
import { ShowcaseOverlayComponent } from '../../components/showcase-overlay/showcase-overlay.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, SkillsComponent, PortfolioComponent, ContactComponent, FloatingProjectBtnComponent, ShowcaseOverlayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
