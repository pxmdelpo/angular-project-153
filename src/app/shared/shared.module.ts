import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [NotificacionComponent, ModalConfirmComponent],
  imports: [
    CommonModule
  ],
  providers: [AuthService, UserService]
})
export class SharedModule { }
