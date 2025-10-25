export abstract class Usuario {
  constructor(
    public id: number,
    public nome: String,
    public email: String,
    public senha: String
  ) {}
}