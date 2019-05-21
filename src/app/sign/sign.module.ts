import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoutingModule } from './routing.module';
import { SignComponent } from './sign.component';

@NgModule({
    declarations: [LoginComponent, RegisterComponent, SignComponent],
    exports: [LoginComponent, RegisterComponent],
    imports: [CommonModule, RoutingModule, FormsModule]
})
export class SignModule {}