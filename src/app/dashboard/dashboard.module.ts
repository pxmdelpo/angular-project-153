import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { COMPONENTS } from './init';
import { UserService } from './services/user.service';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RoutingModule],
  exports: [...COMPONENTS],
  providers: [UserService]
})
export class DashboardModule { }
