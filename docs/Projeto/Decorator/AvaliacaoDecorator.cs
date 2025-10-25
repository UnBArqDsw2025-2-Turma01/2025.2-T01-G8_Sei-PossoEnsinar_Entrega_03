using SeiPossoEnsinar.Application.Interfaces;

namespace SeiPossoEnsinar.Application.Decorators
{
    /// Adiciona a responsabilidade de exibir a Média de Avaliações (UC10).
    public class AvaliacaoDecorator : PerfilDecorator
    {
        private readonly double _mediaAvaliacao;

        public AvaliacaoDecorator(IPerfil wrappee, double mediaAvaliacao) : base(wrappee)
        {
            _mediaAvaliacao = mediaAvaliacao;
        }

        public override string ExibirPerfil()
        {
            string exibicaoBase = base.ExibirPerfil();

            string minhaAvaliacao = $"<h2>Média de Avaliações (UC10):</h2>\n" +
                                    $"<p> {_mediaAvaliacao:F1} de 5.0</p>\n";

            return exibicaoBase + minhaAvaliacao;
        }
    }
}