import 'reflect-metadata'; 
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NotificacaoService } from './notificacao/notificacao.service';


async function bootstrap() {
  
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: false, 
  });
  
  console.log('Aplicação NestJS inicializada para teste.\n');
  
  const notificacaoService = app.get(NotificacaoService);

  await notificacaoService.enviarNotificacaoParaUsuario(
    1, 
    'Sua sessão de ensino de C++ foi agendada!',
  );
  
  await app.close();
}

bootstrap();