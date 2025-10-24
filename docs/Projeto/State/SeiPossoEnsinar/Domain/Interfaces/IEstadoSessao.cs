
using SeiPossoEnsinar.Domain.Entities;
namespace SeiPossoEnsinar.Domain.Interfaces
{
    public interface IEstadoSessao
    {
        void Aceitar(Sessao sessao);
        void Recusar(Sessao sessao);
        void Cancelar(Sessao sessao);
        void Concluir(Sessao sessao);
        void Avaliar(Sessao sessao, string comentario, int nota);
        void EnviarMensagem(Sessao sessao, string mensagem);
    }
}