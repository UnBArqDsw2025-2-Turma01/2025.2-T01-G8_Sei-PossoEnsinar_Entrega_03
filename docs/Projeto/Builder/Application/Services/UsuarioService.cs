using SeiPossoEnsinar.Domain.Entities;
using SeiPossoEnsinar.Application.Builders;
using SeiPossoEnsinar.Application.Services.Dtos;
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
        public Usuario CriarAluno(AlunoCreateDto dados)
        {
            _director.ConstructAluno(dados.Nome, dados.Email, dados.Senha);

            return _builder.Build();
        }

        // Método para o UC1 - Fluxo Alternativo
        public Usuario CriarMonitor(MonitorCreateDto dados)
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
}