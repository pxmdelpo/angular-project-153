import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AuthService } from './services/auth.service';
import { ShorTextPipe } from './pipes/short-text.pipe';

@NgModule({
  declarations: [
      NotificacionComponent,
      ModalConfirmComponent,
      ShorTextPipe
    ],
  imports: [
    CommonModule
  ],
  exports: [
    ShorTextPipe
  ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ AuthService ]
        };
    }
}
