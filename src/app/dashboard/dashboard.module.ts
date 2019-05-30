import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { COMPONENTS } from './init';
import { UserService } from './services/user.service';
import { RoutingModule } from './routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from './services/category.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RoutingModule, NgbModule, FormsModule, ReactiveFormsModule, SharedModule],
  exports: [...COMPONENTS],
  providers: [UserService, CategoryService]
})
export class DashboardModule { }
