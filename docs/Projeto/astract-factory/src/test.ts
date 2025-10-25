import { AlunoFactory } from "./factories/aluno.factory.service";
import { MonitorFactory } from "./factories/monitor.factory.service";
import { Aluno } from "./shared/models/aluno.model";
import { Monitor } from "./shared/models/monitor.model";


console.log("--- Iniciando Teste da Abstract Factory ---");

console.log("\n[Cenário 1: Fábrica de Aluno]");
const alunoFactory = new AlunoFactory();
const aluno = alunoFactory.createUser();

console.log("Usuário criado:", aluno);
console.log("Instância de Aluno?", aluno instanceof Aluno); 

console.log("\n[Cenário 2: Fábrica de Monitor]");
const monitorFactory = new MonitorFactory();

const monitor = monitorFactory.createUser();
console.log("Usuário criado:", monitor);
console.log("Instância de Monitor?", monitor instanceof Monitor); 

const sessao = monitorFactory.createSessao();
const material = monitorFactory.createMaterial();

console.log("\nProduto 1 (Sessão):", sessao);
console.log("Produto 2 (Material):", material);

console.log("\n--- Teste Concluído ---");