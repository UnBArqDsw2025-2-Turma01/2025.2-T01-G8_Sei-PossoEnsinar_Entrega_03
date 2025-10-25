using System.Collections.Generic;

namespace SeiPossoEnsinar.Application.Services.Dtos
{
    public class AlunoCreateDto
    {
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
    }

    public class MonitorCreateDto : AlunoCreateDto
    {
        public string Descricao { get; set; }
        public List<string> Competencias { get; set; }
    }
}