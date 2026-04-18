import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'component-dashboard-navbar',
  imports: [RouterLink, RouterLinkActive, ButtonModule],
  templateUrl: './dashboard-navbar.html',
  styleUrl: './dashboard-navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardNavbar { 
  authService = inject(AuthService)
  private router = inject(Router);

  titleNavbar = signal<string>('');

  get user(){
    return this.authService.user()
  }

  isActive(path: string){
    return this.router.url === `/dashboard/${path}`;
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  logout() {
    this.authService.logout();
    this.closeMenu();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar__user')) {
      this.closeMenu();
    }
  }
}
