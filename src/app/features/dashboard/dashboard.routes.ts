import { Routes } from "@angular/router";
import { LayoutDashboard } from "./layout-dashboard/layout-dashboard";
import { DashboardProductsPage } from "./pages/dashboard-products-page/dashboard-products-page";
import { DashboardProductSinglePage } from "./pages/dashboard-product-single-page/dashboard-product-single-page";

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        component: LayoutDashboard,
        children:[
            {
                path: 'productos',
                component: DashboardProductsPage
            },
            {
                path: 'productos/:id_product',
                component: DashboardProductSinglePage
            }
        ],
    },
]