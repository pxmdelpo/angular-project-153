import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoutingModule } from './routing.module';
import { SignComponent } from './sign.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CompareValidatorDirective } from './directives/compare-validator.directive';
import { UniqueValidatorDirective } from './directives/unique-validator.directive';

@NgModule({
    declarations: [LoginComponent, RegisterComponent, SignComponent, CompareValidatorDirective, UniqueValidatorDirective],
    exports: [LoginComponent, RegisterComponent],
    imports: [CommonModule, RoutingModule, ReactiveFormsModule, FormsModule],
})
export class SignModule {}
