using System.Collections.Generic;

namespace SeiPossoEnsinar.Application.Services
{
    public class UsuarioService
    {
        private readonly ConcreteUsuarioBuilder _builder;
        private readonly UsuarioDirector _director;

        public UsuarioService()
        {
            _builder = new ConcreteUsuarioBuilder();
            _director = new UsuarioDirector();
            // Injeta o builder no director
            _director.SetBuilder(_builder);
        }

        // Método para o UC1 - Fluxo Principal
        public Usuario CriarAluno(Dtos.AlunoCreateDto dados)
        {
            _director.ConstructAluno(dados.Nome, dados.Email, dados.Senha);

            return _builder.Build();
        }

        // Método para o UC1 - Fluxo Alternativo
        public Usuario CriarMonitor(Dtos.MonitorCreateDto dados)
        {
            _director.ConstructMonitor(
                dados.Nome,
                dados.Email,
                dados.Senha,
                dados.Descricao,
                dados.Competencias
            );

            return _builder.Build();
        }
    }

    namespace Dtos
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
}