export class SessaoDeEnsino {
  constructor(
    public id: number,
    public titulo: String,
    public materia: String,
    public data: Date,
    public horario: String
  ) {}
}