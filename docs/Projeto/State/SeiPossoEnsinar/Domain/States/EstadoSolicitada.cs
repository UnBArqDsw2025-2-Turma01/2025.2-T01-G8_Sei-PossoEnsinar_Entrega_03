using SeiPossoEnsinar.Domain.Interfaces;
using SeiPossoEnsinar.Domain.Entities;
using System;

namespace SeiPossoEnsinar.Domain.States
{
    public class EstadoSolicitada : IEstadoSessao
    {
        public void Aceitar(Sessao sessao)
        {
            Console.WriteLine("Sessão aceita pelo monitor.");
            sessao.MudarEstado(new EstadoAgendada());
        }

        public void Recusar(Sessao sessao)
        {
            Console.WriteLine("Sessão recusada pelo monitor.");
            sessao.MudarEstado(new EstadoCancelada());
        }

        public void Cancelar(Sessao sessao)
        {
            Console.WriteLine("Solicitação cancelada pelo aluno.");
            sessao.MudarEstado(new EstadoCancelada());
        }

        public void Concluir(Sessao s) => throw new InvalidOperationException($"Não é possível 'Concluir' uma sessão que está 'Solicitada'.");
        public void Avaliar(Sessao s, string c, int n) => throw new InvalidOperationException($"Não é possível 'Avaliar' uma sessão que está 'Solicitada'.");
        public void EnviarMensagem(Sessao s, string m) => throw new InvalidOperationException($"Não é possível 'Enviar Mensagem' uma sessão que está 'Solicitada'.");
    }
}