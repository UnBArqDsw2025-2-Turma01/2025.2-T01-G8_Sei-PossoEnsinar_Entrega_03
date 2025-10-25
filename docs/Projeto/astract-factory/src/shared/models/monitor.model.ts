import { Usuario } from "./usuario.model";
export class Monitor extends Usuario {
  constructor(
    id: number,
    nome: String,
    email: String,
    senha: String,
    public idMonitor: number,
    public disponibilidade: any
  ) {
    super(id, nome, email, senha);
  }
}