import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard.component';
import { UserEditComponent } from './users/user-edit.component';
import { CategoryEditComponent } from './categories/category-edit.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: 'users/:id',
                component: UserEditComponent
            },
            {
                path: 'categories',
                component: CategoriesComponent
            },
            {
                path: 'categories/:id',
                component: CategoryEditComponent
            },
            {
                path: 'products',
                component: ProductsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}
