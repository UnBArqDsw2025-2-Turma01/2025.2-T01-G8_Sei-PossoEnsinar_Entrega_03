using System.Collections.Generic;

namespace SeiPossoEnsinar.Application.Builders
{
    public class UsuarioDirector
    {
        private IUsuarioBuilder _builder;

        public void SetBuilder(IUsuarioBuilder builder)
        {
            this._builder = builder;
        }

        // Receita 1: (UC1 - Fluxo Principal)
        public void ConstructAluno(string nome, string email, string senha)
        {
            _builder.SetNome(nome)
                    .SetEmail(email)
                    .SetSenha(senha);
        }

        // Receita 2: (UC1 - Fluxo Alternativo)
        public void ConstructMonitor(string nome, string email, string senha, string descricao, List<string> competencias)
        {
            this.ConstructAluno(nome, email, senha);

            _builder.SetDescricao(descricao)
                    .SetCompetencias(competencias);
        }
    }
}