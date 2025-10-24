// main.ts

import { TeachingMediator } from "./teaching.mediator";
import { Aluno } from "./aluno.component";
import { Monitor } from "./monitor.component";
import { SessaoDeEnsinoComponent } from "./sessao.component";

const mediator = new TeachingMediator();

const alunoMaria = new Aluno(mediator, "Maria");
const monitorJoao = new Monitor(mediator, "João");
const sessaoUML = new SessaoDeEnsinoComponent(mediator, "Modelagem UML");

mediator.registerComponent(alunoMaria);
mediator.registerComponent(monitorJoao);
mediator.registerComponent(sessaoUML);

console.log("--- CENÁRIO 1: Criação de Sessão ---");
sessaoUML.performAction(); 

console.log("\n--- CENÁRIO 2: Aluno solicita Inscrição ---");
alunoMaria.performAction();

console.log("\n--- CENÁRIO 3: Monitor responde Solicitação ---");
monitorJoao.performAction();
