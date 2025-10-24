using Xunit;
using SeiPossoEnsinar.Domain.Entities;
using SeiPossoEnsinar.Domain.States;
using System;

namespace SeiPossoEnsinar.Tests
{
    public class SessaoStateTests
    {
        [Fact]
        public void NovaSessaoDeveEstarNoEstadoSolicitada()
        {
            var sessao = new Sessao();
            Assert.IsType<EstadoSolicitada>(sessao.GetEstado());
        }

        [Fact]
        public void AceitarSessaoSolicitadaDeveMudarParaAgendada()
        {
            var sessao = new Sessao();
            sessao.Aceitar();
            Assert.IsType<EstadoAgendada>(sessao.GetEstado());
        }

        [Fact]
        public void RecusarSessaoSolicitadaDeveMudarParaCancelada()
        {
            var sessao = new Sessao();
            sessao.Recusar();
            Assert.IsType<EstadoCancelada>(sessao.GetEstado());
        }

        [Fact]
        public void CancelarSessaoSolicitadaDeveMudarParaCancelada()
        {
            var sessao = new Sessao();
            sessao.Cancelar();
            Assert.IsType<EstadoCancelada>(sessao.GetEstado());
        }

        [Fact]
        public void ConcluirSessaoAgendadaDeveMudarParaConcluida()
        {
            var sessao = new Sessao();
            sessao.Aceitar(); // Solicitada -> Agendada
            sessao.Concluir(); // Agendada -> Concluida
            Assert.IsType<EstadoConcluida>(sessao.GetEstado());
        }

        [Fact]
        public void TentarAceitarSessaoAgendadaDeveLancarExcecao()
        {
            var sessao = new Sessao();
            sessao.Aceitar(); // Solicitada -> Agendada
            Assert.Throws<InvalidOperationException>(() => sessao.Aceitar());
        }

        [Fact]
        public void TentarConcluirSessaoSolicitadaDeveLancarExcecao()
        {
            var sessao = new Sessao();
            Assert.Throws<InvalidOperationException>(() => sessao.Concluir());
        }

        [Fact]
        public void AvaliarSessaoConcluidaNaoDeveLancarExcecao()
        {
            var sessao = new Sessao();
            sessao.Aceitar(); // Solicitada -> Agendada
            sessao.Concluir(); // Agendada -> Concluida
            var exception = Record.Exception(() => sessao.Avaliar("Bom", 5));
            Assert.Null(exception);
        }

        [Fact]
        public void TentarEnviarMensagemSessaoConcluidaDeveLancarExcecao()
        {
            var sessao = new Sessao();
            sessao.Aceitar(); // Solicitada -> Agendada
            sessao.Concluir(); // Agendada -> Concluida
            Assert.Throws<InvalidOperationException>(() => sessao.EnviarMensagem("Olá"));
        }
    }
}