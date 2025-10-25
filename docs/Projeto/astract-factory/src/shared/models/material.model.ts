export class Material {
  constructor(
    public id: number,
    public titulo: String,
    public materia: String,
    public arquivo: String, // Simplificado para String
    public dataEnvio: Date
  ) {}
}