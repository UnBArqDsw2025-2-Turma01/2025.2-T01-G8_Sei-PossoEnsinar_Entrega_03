namespace SeiPossoEnsinar.Domain.Entities
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Descricao { get; set; }
        public string Tipo { get; set; } // Aluno ou Monitor
    }
}