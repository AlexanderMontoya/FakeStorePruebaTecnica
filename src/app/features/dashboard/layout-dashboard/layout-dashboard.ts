import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardNavbar } from "../components/dashboard-navbar/dashboard-navbar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-dashboard',
  imports: [RouterOutlet, DashboardNavbar],
  templateUrl: './layout-dashboard.html',
  styleUrl: './layout-dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutDashboard { }
