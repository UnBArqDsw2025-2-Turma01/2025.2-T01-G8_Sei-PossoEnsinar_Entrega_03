import { Usuario } from "./usuario.model";
export class Aluno extends Usuario {
  constructor(
    id: number,
    nome: String,
    email: String,
    senha: String,
    public idAluno: number
  ) {
    super(id, nome, email, senha);
  }
}