using SeiPossoEnsinar.Application.Interfaces;
using System.Collections.Generic;
using System.Text;

namespace SeiPossoEnsinar.Application.Decorators
{
    /// Adiciona a responsabilidade de exibir Competências (UC4).
    public class CompetenciaDecorator : PerfilDecorator
    {
        private readonly List<string> _competencias;

        public CompetenciaDecorator(IPerfil wrappee, List<string> competencias) : base(wrappee)
        {
            _competencias = competencias;
        }

        public override string ExibirPerfil()
        {
            string exibicaoBase = base.ExibirPerfil();

            var sb = new StringBuilder();
            sb.AppendLine("<h2>Competências (UC4):</h2>");
            sb.AppendLine("<ul>");
            foreach (var comp in _competencias)
            {
                sb.AppendLine($"  <li>{comp}</li>");
            }
            sb.AppendLine("</ul>");

            return exibicaoBase + sb.ToString();
        }
    }
}