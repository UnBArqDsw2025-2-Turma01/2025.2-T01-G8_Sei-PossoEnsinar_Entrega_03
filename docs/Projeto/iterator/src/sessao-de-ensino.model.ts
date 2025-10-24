
export class SessaoDeEnsino {
  id: number;
  titulo: string;
  materia: string;
  data: Date;
  horario: string; // Time
  privacidade: string;
  status: string;
  avaliacao: number;

  constructor(id: number, titulo: string, materia: string, data: Date, horario: string) {
    this.id = id;
    this.titulo = titulo;
    this.materia = materia;
    this.data = data;
    this.horario = horario;
    this.status = 'Agendada';
    this.privacidade = 'Pública';
    this.avaliacao = 0;
  }

  showDetails(): string {
    const formattedDate = this.data.toLocaleDateString('pt-BR');
    return `[Sessão ${this.id}] ${this.titulo} - Matéria: ${this.materia}, Data: ${formattedDate} às ${this.horario}, Status: ${this.status}`;
  }
}