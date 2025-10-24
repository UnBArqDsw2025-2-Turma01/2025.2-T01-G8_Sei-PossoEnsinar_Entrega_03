
import { SessaoDeEnsino } from './sessao-de-ensino.model';
import { SessaoDeEnsinoIterator } from './sessao-de-ensino.iterator';
import { Aggregate, Iterator } from './iterator.interface';


export class Calendario implements Aggregate<SessaoDeEnsino> {
  id: number;
  ano: number;
  mes: number;
  private sessoes: SessaoDeEnsino[] = []; 

  constructor(id: number, ano: number, mes: number) {
    this.id = id;
    this.ano = ano;
    this.mes = mes;
  }

  adicionarSessao(sessao: SessaoDeEnsino): void {
    console.log(`[Calendario] Agendando sessão: ${sessao.titulo}`);
    this.sessoes.push(sessao);
  }
  
  removerSessao(sessao: SessaoDeEnsino): void {
    const index = this.sessoes.findIndex(s => s.id === sessao.id);
    if (index > -1) {
      this.sessoes.splice(index, 1);
      console.log(`[Calendario] Sessão ${sessao.titulo} removida.`);
    }
  }
  

  createIterator(): Iterator<SessaoDeEnsino> {
    return new SessaoDeEnsinoIterator(this.sessoes);
  }

  createFutureSessionsIterator(): Iterator<SessaoDeEnsino> {
    const now = new Date();
    const futureSessoes = this.sessoes.filter(s => s.data.getTime() > now.getTime());
    console.log(`\n[Calendario] Criando Iterator com ${futureSessoes.length} sessões futuras.`);
    return new SessaoDeEnsinoIterator(futureSessoes);
  }
}