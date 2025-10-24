using SeiPossoEnsinar.Domain.Interfaces;
using SeiPossoEnsinar.Domain.States;
using System; 

namespace SeiPossoEnsinar.Domain.Entities
{
    public class Sessao
    {
        private IEstadoSessao _estado;
        public Sessao()
        {
            this._estado = new EstadoSolicitada();
        }
        public void MudarEstado(IEstadoSessao novoEstado)
        {
            this._estado = novoEstado;
        }
        public IEstadoSessao GetEstado() => _estado;
        public void Aceitar() => _estado.Aceitar(this);
        public void Recusar() => _estado.Recusar(this);
        public void Cancelar() => _estado.Cancelar(this);
        public void Concluir() => _estado.Concluir(this);
        public void Avaliar(string c, int n) => _estado.Avaliar(this, c, n);
        public void EnviarMensagem(string msg) => _estado.EnviarMensagem(this, msg);
    }
}