using SeiPossoEnsinar.Domain.Entities;
using System.Collections.Generic;

namespace SeiPossoEnsinar.Application.Builders
{
    public interface IUsuarioBuilder
    {
        IUsuarioBuilder SetNome(string nome);
        IUsuarioBuilder SetEmail(string email);
        IUsuarioBuilder SetSenha(string senha);
        IUsuarioBuilder SetDescricao(string descricao);
        IUsuarioBuilder SetCompetencias(List<string> competencias);
        Usuario Build();
    }
}