
import { Aluno } from "./aluno.component";
import { Component } from "./component.abstract";
import { Monitor } from "./monitor.component";
import { SessaoDeEnsinoComponent } from "./sessao.component";



export class TeachingMediator implements TeachingMediator {
  private alunos: Aluno[] = [];
  private monitors: Monitor[] = [];
  private sessoes: SessaoDeEnsinoComponent[] = [];

  registerComponent(component: Component): void {
    if (component instanceof Aluno) {
      this.alunos.push(component);
    } else if (component instanceof Monitor) {
      this.monitors.push(component);
    } else if (component instanceof SessaoDeEnsinoComponent) {
      this.sessoes.push(component);
    }
  }

  notify(sender: Component, event: string, data?: any): void {
    console.log(`\n[MEDIATOR] Evento: ${event} disparado por ${sender.constructor.name}`);

    switch (event) {
      case "solicitarInscricao":
        console.log(`[MEDIATOR] Processando solicitação de inscrição na Sessão ID: ${data.sessaoId}`);
        
        const monitorResponsavel = this.monitors[0]; 
        monitorResponsavel.receiveRequest(`Inscrição do ${sender.constructor.name} na sessão ${data.sessaoId}`);
        break;

      case "responderSolicitacao":
        console.log(`[MEDIATOR] Notificando Aluno sobre a resposta do Monitor: ${data.status}`);

        this.alunos.forEach(aluno => {
          aluno.receiveNotification(`Status da sua solicitação: ${data.status}`);
        });
        break;

      case "sessaoCriada":
        console.log(`[MEDIATOR] Nova sessão "${data.titulo}" criada. Iniciando match de interesse...`);
        this.alunos.forEach(aluno => {
          aluno.receiveNotification(`Nova sessão disponível: ${data.titulo}`);
        });
        break;

      default:
        console.log("[MEDIATOR] Nenhum fluxo de comunicação definido para este evento.");
    }
  }
}