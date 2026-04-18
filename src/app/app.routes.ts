import { Routes } from '@angular/router';
import { AuthLoginPage } from './features/auth/auth-login-page/auth-login-page';
import { guestGuard } from './core/guards/guestGuard.guard';
import { authGuard } from './core/guards/authGuard.guard';

export const routes: Routes = [
    {
      path: 'login',
      component: AuthLoginPage,
      canActivate: [ guestGuard ]
    },
    {
      path: 'dashboard',
      loadChildren: () =>
        import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
      canActivate: [authGuard]
    },
    {
        path:'**',
        redirectTo: 'login'
    }
];
