import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { COMPONENTS } from './init';
import { RoutingModule } from './routing.module';
import { CategoryService } from './services/category.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RoutingModule, NgbModule, FormsModule, ReactiveFormsModule],
  exports: [...COMPONENTS],
  providers: [CategoryService, UserService]
})
export class DashboardModule { }
