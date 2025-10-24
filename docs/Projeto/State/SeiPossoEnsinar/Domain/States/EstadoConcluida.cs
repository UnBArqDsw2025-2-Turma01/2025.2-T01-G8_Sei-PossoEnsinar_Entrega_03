using SeiPossoEnsinar.Domain.Interfaces;
using SeiPossoEnsinar.Domain.Entities;
using System;

namespace SeiPossoEnsinar.Domain.States
{
    public class EstadoConcluida : IEstadoSessao
    {
        public void Avaliar(Sessao sessao, string comentario, int nota)
        {
            Console.WriteLine($"Sessão avaliada: Nota {nota}, Comentário: {comentario}");
        }

        public void Aceitar(Sessao s) => throw new InvalidOperationException($"Não é possível 'Aceitar' uma sessão que já foi 'Concluída'.");
        public void Recusar(Sessao s) => throw new InvalidOperationException($"Não é possível 'Recusar' uma sessão que já foi 'Concluída'.");
        public void Cancelar(Sessao s) => throw new InvalidOperationException($"Não é possível 'Cancelar' uma sessão que já foi 'Concluída'.");
        public void Concluir(Sessao s) => throw new InvalidOperationException($"Não é possível 'Concluir' uma sessão que já foi 'Concluída'.");
        
        public void EnviarMensagem(Sessao s, string m) => throw new InvalidOperationException($"Não é possível 'Enviar Mensagem' uma sessão que já foi 'Concluída'.");
    }
}