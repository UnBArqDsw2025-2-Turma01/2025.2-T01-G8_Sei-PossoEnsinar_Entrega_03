import { Module } from '@nestjs/common';
import { NotificacaoService } from './notificacao.service';
import { UsuarioModule } from '../usuario/usuario.module';

@Module({
  imports: [
    UsuarioModule, 
  ],
  providers: [NotificacaoService],
  exports: [NotificacaoService],
})
export class NotificacaoModule {}