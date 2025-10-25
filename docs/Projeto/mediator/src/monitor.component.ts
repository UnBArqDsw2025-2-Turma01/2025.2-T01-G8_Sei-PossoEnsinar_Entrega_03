
import { Component } from "./component.abstract";

export class Monitor extends Component {
  constructor(mediator: any, private nome: string) {
    super(mediator);
  }

  performAction(): void {
    this.responderSolicitacao("Aprovada");
  }

  receiveRequest(request: string): void {
    console.log(`[MONITOR - ${this.nome}] SOLICITAÇÃO RECEBIDA: ${request}. Processando...`);
    this.responderSolicitacao("Aprovada");
  }

  responderSolicitacao(status: 'Aprovada' | 'Rejeitada'): void {
    console.log(`[MONITOR - ${this.nome}] Responde solicitação com status: ${status}`);
    this.mediator.notify(this, "responderSolicitacao", { status });
  }
}