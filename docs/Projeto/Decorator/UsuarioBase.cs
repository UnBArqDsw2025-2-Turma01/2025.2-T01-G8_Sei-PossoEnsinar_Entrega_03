using SeiPossoEnsinar.Application.Interfaces;
using SeiPossoEnsinar.Domain.Entities; // Assumindo que você tem a entidade

// Define o namespace (ex: SeiPossoEnsinar.Application.Services)
namespace SeiPossoEnsinar.Application.Services
{
    public class UsuarioBase : IPerfil
    {
        private readonly Usuario _usuario;

        public UsuarioBase(Usuario usuario)
        {
            _usuario = usuario;
        }

        public string ExibirPerfil()
        {
            // Exibição base (UC3)
            return $"<h1>{_usuario.Nome}</h1>\n" +
                   $"<p>{_usuario.Email}</p>\n" +
                   $"<p>{_usuario.Descricao ?? "Usuário não forneceu uma descrição."}</p>\n";
        }
    }
}