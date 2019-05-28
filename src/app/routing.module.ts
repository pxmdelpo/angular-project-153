import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {
        path: 'sign',
        loadChildren: './sign/sign.module#SignModule'
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: 'sign',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'sign',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}