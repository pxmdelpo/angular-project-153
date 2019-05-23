import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { COMPONENTS } from './init';
import { UserService } from './services/user.service';
import { RoutingModule } from './routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RoutingModule, NgbModule, FormsModule, ReactiveFormsModule],
  exports: [...COMPONENTS],
  providers: [UserService]
})
export class DashboardModule { }
