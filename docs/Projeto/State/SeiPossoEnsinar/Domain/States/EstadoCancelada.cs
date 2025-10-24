using SeiPossoEnsinar.Domain.Interfaces;
using SeiPossoEnsinar.Domain.Entities;
using System;

namespace SeiPossoEnsinar.Domain.States
{
    public class EstadoCancelada : IEstadoSessao
    {
        public void Aceitar(Sessao s) => throw new InvalidOperationException($"Não é possível 'Aceitar' uma sessão que já foi 'Cancelada'.");
        public void Recusar(Sessao s) => throw new InvalidOperationException($"Não é possível 'Recusar' uma sessão que já foi 'Cancelada'.");
        public void Cancelar(Sessao s) => throw new InvalidOperationException($"Não é possível 'Cancelar' uma sessão que já foi 'Cancelada'.");
        public void Concluir(Sessao s) => throw new InvalidOperationException($"Não é possível 'Concluir' uma sessão que já foi 'Cancelada'.");
        public void Avaliar(Sessao s, string c, int n) => throw new InvalidOperationException($"Não é possível 'Avaliar' uma sessão que já foi 'Cancelada'.");
        public void EnviarMensagem(Sessao s, string m) => throw new InvalidOperationException($"Não é possível 'Enviar Mensagem' uma sessão que já foi 'Cancelada'.");
    }
}