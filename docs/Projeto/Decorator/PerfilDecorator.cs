using SeiPossoEnsinar.Application.Interfaces;

namespace SeiPossoEnsinar.Application.Decorators
{
    public abstract class PerfilDecorator : IPerfil
    {
        protected readonly IPerfil _wrappee;

        public PerfilDecorator(IPerfil wrappee)
        {
            _wrappee = wrappee;
        }

        public virtual string ExibirPerfil()
        {
            return _wrappee.ExibirPerfil();
        }
    }
}