import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}