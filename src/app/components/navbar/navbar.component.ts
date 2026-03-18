import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isNavActive = signal(false);

  toggleNav() {
    this.isNavActive.update(v => !v);
  }

  closeNav() {
    this.isNavActive.set(false);
  }
}
