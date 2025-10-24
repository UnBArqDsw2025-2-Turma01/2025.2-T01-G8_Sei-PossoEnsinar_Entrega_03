using SeiPossoEnsinar.Domain.Entities; 
using System; 

namespace SeiPossoEnsinar.Application.Services
{
    public class SessaoService
    {

        public void AceitarSolicitacao(Guid sessaoId)
        {
            Sessao sessao = new Sessao(); 
            try
            {
                sessao.Aceitar();
            }
            catch (InvalidOperationException ex)
            {
                Console.WriteLine(ex.Message);
                return;
            }
        }
    }
}