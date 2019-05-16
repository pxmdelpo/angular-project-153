import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';

@NgModule({
  declarations: [NotificacionComponent, ModalConfirmComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
