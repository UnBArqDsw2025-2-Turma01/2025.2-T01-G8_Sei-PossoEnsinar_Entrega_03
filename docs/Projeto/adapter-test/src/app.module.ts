import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { NotificacaoModule } from './notificacao/notificacao.module';

@Module({
  imports: [
    UsuarioModule, 
    NotificacaoModule
  ],
})
export class AppModule {}