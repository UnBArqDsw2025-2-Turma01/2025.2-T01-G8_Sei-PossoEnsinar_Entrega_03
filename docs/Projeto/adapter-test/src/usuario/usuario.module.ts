import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioNotificationAdapter } from './usuario-notification.adapter';
import { NOTIFIABLE_USER_SERVICE } from './interfaces/INotifiableUserService.interface';

@Module({
  providers: [
    UsuarioService,
    {
      provide: NOTIFIABLE_USER_SERVICE,
      useClass: UsuarioNotificationAdapter,
    },
  ],
  exports: [
    NOTIFIABLE_USER_SERVICE,
  ],
})
export class UsuarioModule {}