import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'register',
    //     pathMatch: 'full'
    // },
    // {
    //     path: 'login',
    //     component: LoginComponent,
    // }
    {
        path: 'sign',
        loadChildren: './sign/sign.module#SignModule'
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}