
import { Iterator } from './iterator.interface';
import { SessaoDeEnsino } from './sessao-de-ensino.model';


export class SessaoDeEnsinoIterator implements Iterator<SessaoDeEnsino> {
  private index: number = 0;
  private readonly sessoes: SessaoDeEnsino[]; 

  constructor(sessoes: SessaoDeEnsino[]) {
    this.sessoes = sessoes;
  }

  hasNext(): boolean {
    return this.index < this.sessoes.length;
  }

  next(): SessaoDeEnsino | null {
    if (this.hasNext()) {
      return this.sessoes[this.index++];
    }
    return null;
  }
}