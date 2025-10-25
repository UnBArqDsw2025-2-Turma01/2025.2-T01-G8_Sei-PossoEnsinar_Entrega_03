using Microsoft.AspNetCore.Mvc;
using SeiPossoEnsinar.Application.Services;
using SeiPossoEnsinar.Application.Services.Dtos;
using SeiPossoEnsinar.Domain.Entities;

namespace SeiPossoEnsinar.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuarioService _usuarioService;

        public UsuarioController(UsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpPost("registrar-aluno")]
        public IActionResult RegistrarAluno([FromBody] AlunoCreateDto dados)
        {
            Usuario novoAluno = _usuarioService.CriarAluno(dados);
            return CreatedAtAction(nameof(RegistrarAluno), novoAluno);
        }

        [HttpPost("registrar-monitor")]
        public IActionResult RegistrarMonitor([FromBody] MonitorCreateDto dados)
        {
            Usuario novoMonitor = _usuarioService.CriarMonitor(dados);
            return CreatedAtAction(nameof(RegistrarMonitor), novoMonitor);
        }
    }
}