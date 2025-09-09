import { Routes } from '@angular/router';
import { Dashboard } from './shared/dashboard/dashboard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
    },
    {
        path:'dashboard',
        loadChildren:()=>
            import('./shared/dashboard.routes').then((m)=>m.dashboardRoutes),
    },
    {
        path:'**',
        redirectTo:'dashboard',
        pathMatch:'full',
    }
];
