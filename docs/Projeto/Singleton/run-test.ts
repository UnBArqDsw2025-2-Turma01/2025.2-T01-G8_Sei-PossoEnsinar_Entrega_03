import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ServicoDeMateriais } from './servico-de-materiais.service';
import { ServicoDeHabilidades } from './servico-de-habilidades.service';

async function bootstrap() {
  console.log('----------------------------------------------------');
  console.log('Iniciando aplicação NestJS (modo "ApplicationContext")...');
  
  // Cria o contexto da aplicação
  const app = await NestFactory.createApplicationContext(AppModule);

  console.log('Aplicação inicializada. O Singleton já foi criado.');
  console.log('----------------------------------------------------');
  console.log('Solicitando ao NestJS as instâncias dos serviços...');

  // Pede ao NestJS para entregar as instâncias dos serviços
  const servicoMateriais = app.get(ServicoDeMateriais);
  const servicoHabilidades = app.get(ServicoDeHabilidades);

  console.log('Serviços recebidos.');
  console.log('----------------------------------------------------');
  console.log('Testando o Padrão Singleton:');

  // Pega o ID da instância do DB a partir de cada serviço
  const idFromMateriais = servicoMateriais.getDbInstanceId();
  const idFromHabilidades = servicoHabilidades.getDbInstanceId();
  
  console.log('\n--- RESULTADO ---');
  console.log(`ID do Pool vindo do ServicoDeMateriais:   ${idFromMateriais}`);
  console.log(`ID do Pool vindo do ServicoDeHabilidades: ${idFromHabilidades}`);

  // Resultado
  if (idFromMateriais === idFromHabilidades) {
    console.log('\n[SUCESSO] Os IDs são IDÊNTICOS.');
    console.log('Isso prova que o NestJS injetou a MESMA instância (Singleton) do DatabaseConnectionPoolService em ambos os serviços.');
  } else {
    console.log('\n[FALHA] Os IDs são DIFERENTES. O padrão Singleton falhou.');
  }
  console.log('----------------------------------------------------');

  await app.close();
}

bootstrap();