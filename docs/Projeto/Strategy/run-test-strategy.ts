import { NestFactory } from '@nestjs/core';
import { ReportController } from './report.controller';
import { ReportModule } from './report.module';
import { Report } from './types/report.type';

// Import obrigatório para o NestJS funcionar
import 'reflect-metadata';

async function bootstrap() {
  console.log('----------------------------------------------------');
  console.log('Iniciando aplicação NestJS (modo "ApplicationContext")...');
  
  const app = await NestFactory.createApplicationContext(ReportModule);

  console.log('Aplicação inicializada. Contexto e Controller estão prontos.');
  console.log('----------------------------------------------------');
  
  const reportController = app.get(ReportController);

  console.log('Testando o Padrão Strategy:');

  const report1: Report = {
    type: 'no-show',
    reportandoId: 10,
    reportadoId: 1,
    motivo: 'Monitor não apareceu na sessão.'
  };

  const report2: Report = {
    type: 'inappropriate',
    reportandoId: 15,
    reportadoId: 11,
    motivo: 'Conteúdo ofensivo no chat.'
  };

  const report3: Report = {
    type: 'spam',
    reportandoId: 2,
    reportadoId: 25,
    motivo: 'Aluno enviando 10 solicitações por minuto.'
  };

  console.log('\n--- Teste 1: Processando Reporte "MonitorNoShow" ---');
  await reportController.handleReport(report1);

  console.log('\n--- Teste 2: Processando Reporte "InappropriateContent" ---');
  await reportController.handleReport(report2);

  console.log('\n--- Teste 3: Processando Reporte "SpamRequest" ---');
  await reportController.handleReport(report3);
  
  console.log('\n----------------------------------------------------');
  console.log('[SUCESSO] Teste concluído.');
  console.log('Observe como a saída de log muda a cada chamada,');
  console.log('provando que o Contexto executou uma Strategy (algoritmo) diferente.');

  await app.close();
}

bootstrap();