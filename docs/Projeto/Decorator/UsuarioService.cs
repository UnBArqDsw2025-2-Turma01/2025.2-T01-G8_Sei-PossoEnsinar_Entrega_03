using SeiPossoEnsinar.Application.Interfaces;
using SeiPossoEnsinar.Application.Decorators;
using SeiPossoEnsinar.Domain.Entities;
using System.Collections.Generic;

namespace SeiPossoEnsinar.Application.Services
{
    public class UsuarioService
    {
        public string GetPerfilFormatado(int usuarioId)
        {
            Usuario usuario = new Usuario() {
                Nome = "Atyrson Souto (Monitor)",
                Email = "atyrson@email.com",
                Descricao = "Monitor de Arquitetura de Software."
            };

            var competencias = new List<string> { "C#", "UML", "GoF Patterns" };
            double mediaAvaliacao = 4.8;
            bool temAvaliacoes = true;

            IPerfil perfilExibicao = new UsuarioBase(usuario);

            // Regra de negócio (UC4): Se tiver competências, decora
            if (competencias.Count > 0)
            {
                perfilExibicao = new CompetenciaDecorator(perfilExibicao, competencias);
            }

            // Regra de negócio (UC10): Se tiver avaliações, decora
            if (temAvaliacoes)
            {
                perfilExibicao = new AvaliacaoDecorator(perfilExibicao, mediaAvaliacao);
            }

            return perfilExibicao.ExibirPerfil();
        }
    }
}