import { Routes } from "@angular/router";
import { LayoutDashboard } from "./layout-dashboard/layout-dashboard";
import { DashboardProductsPage } from "./pages/dashboard-products-page/dashboard-products-page";

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        component: LayoutDashboard,
        children:[
            {
                path: 'productos',
                component: DashboardProductsPage
            }
        ],
    },
]