import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { DateESPipe } from './pipes/date-es.pipe';

@NgModule({
  declarations: [NotificacionComponent, ModalConfirmComponent, DateESPipe],
  imports: [
    CommonModule
  ],
  exports: [DateESPipe],
  providers: [AuthService, UserService]
})
export class SharedModule { }
