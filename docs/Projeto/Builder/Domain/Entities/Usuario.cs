using System.Collections.Generic;

namespace SeiPossoEnsinar.Domain.Entities
{
    public class Usuario
    {
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Descricao { get; set; }
        public List<string> Competencias { get; set; }
        public bool IsMonitor { get; set; }

        private string SenhaHash { get; set; }

        public void SetSenha(string hash)
        {
            this.SenhaHash = hash;
        }

        public Usuario()
        {
            Competencias = new List<string>();
            IsMonitor = false;
        }
    }
}