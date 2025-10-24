
import { Calendario } from './calendario.model';
import { SessaoDeEnsino } from './sessao-de-ensino.model';
import { Iterator } from './iterator.interface';

function runIteratorDemo() {
  console.log('--- Configurando Calendário ---');
  const calendario2025 = new Calendario(1, 2025, 10);

  const s1 = new SessaoDeEnsino(1, 'Introdução ao Padrão Iterator', 'Padrões de Projeto', new Date(2025, 10, 26), '19:00');
  const s2 = new SessaoDeEnsino(2, 'Modelagem UML', 'Engenharia de Software', new Date(2025, 10, 27), '10:00');
  const s3 = new SessaoDeEnsino(3, 'Revisão de Expressões Lambda', 'Programação Avançada', new Date(2025, 9, 24), '14:00'); 
  const s4 = new SessaoDeEnsino(4, 'Técnicas de Monitoria Eficaz', 'Didática', new Date(2025, 11, 0o1), '17:00');

  calendario2025.adicionarSessao(s1);
  calendario2025.adicionarSessao(s2);
  calendario2025.adicionarSessao(s3);
  calendario2025.adicionarSessao(s4);

  console.log('\n======================================================');
  console.log('  1. PERCURSO TOTAL - Usando o Iterator Padrão (Tudo)');
  console.log('======================================================');

  const iteratorPadrao: Iterator<SessaoDeEnsino> = calendario2025.createIterator();
  
  while (iteratorPadrao.hasNext()) {
    const sessao = iteratorPadrao.next();
    if (sessao) {
      console.log(`[PADRÃO] ${sessao.showDetails()}`);
    }
  }

  console.log('\n======================================================');
  console.log('  2. PERCURSO FILTRADO - Usando um Iterator Especializado (Futuras)');
  console.log('======================================================');
  
  const iteratorFuturo: Iterator<SessaoDeEnsino> = calendario2025.createFutureSessionsIterator();
  
  while (iteratorFuturo.hasNext()) {
    const sessao = iteratorFuturo.next();
    if (sessao) {
      console.log(`[FUTURA] ${sessao.showDetails()}`);
    }
  }
}

runIteratorDemo();