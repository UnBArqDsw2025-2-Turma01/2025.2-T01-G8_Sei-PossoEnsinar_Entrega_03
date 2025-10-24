
import { Component } from "./component.abstract";

export class Aluno extends Component {
  constructor(mediator: any, private nome: string) {
    super(mediator);
  }

  performAction(): void {
    this.solicitarInscricao(101);
  }

  solicitarInscricao(sessaoId: number): void {
    console.log(`[ALUNO - ${this.nome}] Solicita inscrição na sessão ${sessaoId}`);
    this.mediator.notify(this, "solicitarInscricao", { sessaoId });
  }

  receiveNotification(message: string): void {
    console.log(`[ALUNO - ${this.nome}] NOTIFICAÇÃO RECEBIDA: ${message}`);
  }
}