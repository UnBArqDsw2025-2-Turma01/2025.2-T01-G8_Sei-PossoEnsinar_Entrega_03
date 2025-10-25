using SeiPossoEnsinar.Application.Builders;
using SeiPossoEnsinar.Application.Services;
using SeiPossoEnsinar.Application.Services.Dtos;
using SeiPossoEnsinar.Domain.Entities;
using System.Collections.Generic;

namespace SeiPossoEnsinar
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Demonstração do Padrão Builder - Criação de Usuários");
            System.Console.WriteLine("=====================================================");

            UsuarioService usuarioService = new UsuarioService();

            // Criando um aluno (fluxo principal do UC1)
            var alunoDto = new AlunoCreateDto
            {
                Nome = "Ana Silva",
                Email = "ana.silva@email.com",
                Senha = "senha123"
            };

            Usuario aluno = usuarioService.CriarAluno(alunoDto);
            System.Console.WriteLine($"\nAluno criado: {aluno.Nome} - É monitor? {aluno.IsMonitor}");

            // Criando um monitor (fluxo alternativo do UC1)
            var monitorDto = new MonitorCreateDto
            {
                Nome = "Carlos Souza",
                Email = "carlos.souza@email.com",
                Senha = "senha456",
                Descricao = "Professor de Matemática com 5 anos de experiência",
                Competencias = new List<string> { "Matemática", "Cálculo", "Álgebra" }
            };

            Usuario monitor = usuarioService.CriarMonitor(monitorDto);
            System.Console.WriteLine($"\nMonitor criado: {monitor.Nome} - É monitor? {monitor.IsMonitor}");
            System.Console.WriteLine($"Competências: {string.Join(", ", monitor.Competencias)}");

            System.Console.WriteLine("\n=====================================================");
            System.Console.WriteLine("Fim da demonstração do Builder Pattern");
        }
    }
}