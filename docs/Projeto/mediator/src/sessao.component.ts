
import { Component } from "./component.abstract";

export class SessaoDeEnsinoComponent extends Component {
  constructor(mediator: any, private titulo: string) {
    super(mediator);
  }

  performAction(): void {
    this.ofertaSessao();
  }

  ofertaSessao(): void {
    console.log(`[SESSAO - ${this.titulo}] Sessão oferecida e pronta para inscrições.`);
    this.mediator.notify(this, "sessaoCriada", { titulo: this.titulo });
  }
}