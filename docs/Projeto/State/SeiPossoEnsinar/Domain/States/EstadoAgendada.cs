
using SeiPossoEnsinar.Domain.Interfaces;
using SeiPossoEnsinar.Domain.Entities;
using System;

namespace SeiPossoEnsinar.Domain.States
{
    public class EstadoAgendada : IEstadoSessao
    {
        public void Concluir(Sessao sessao)
        {
            Console.WriteLine("Sessão concluída.");
            sessao.MudarEstado(new EstadoConcluida());
        }

        public void Cancelar(Sessao sessao)
        {
            Console.WriteLine("Sessão agendada foi cancelada.");
            sessao.MudarEstado(new EstadoCancelada());
        }

        public void EnviarMensagem(Sessao sessao, string mensagem)
        {
            Console.WriteLine($"Chat (Agendada): {mensagem}");
        }

        public void Aceitar(Sessao s) => throw new InvalidOperationException($"Não é possível 'Aceitar' uma sessão que já está 'Agendada'.");
        public void Recusar(Sessao s) => throw new InvalidOperationException($"Não é possível 'Recusar' uma sessão que já está 'Agendada'.");
        public void Avaliar(Sessao s, string c, int n) => throw new InvalidOperationException($"Não é possível 'Avaliar' uma sessão que já está 'Agendada'.");
    }
}