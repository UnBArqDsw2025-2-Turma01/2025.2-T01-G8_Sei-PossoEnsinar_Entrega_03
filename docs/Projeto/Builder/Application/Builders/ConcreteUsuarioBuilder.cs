using SeiPossoEnsinar.Domain.Entities;
using System.Collections.Generic;
using System;

namespace SeiPossoEnsinar.Application.Builders
{
    public class ConcreteUsuarioBuilder : IUsuarioBuilder
    {
        private Usuario _usuario;

        public ConcreteUsuarioBuilder()
        {
            this.Reset();
        }

        public void Reset()
        {
            this._usuario = new Usuario();
        }

        // Métodos fluentes (retornam 'this')
        public IUsuarioBuilder SetNome(string nome)
        {
            _usuario.Nome = nome;
            return this;
        }

        public IUsuarioBuilder SetEmail(string email)
        {
            _usuario.Email = email; // Adicionar validação de e-mail aqui
            return this;
        }

        public IUsuarioBuilder SetSenha(string senha)
        {
            string hashSimulado = $"hashed_{senha}_simulado";
            _usuario.SetSenha(hashSimulado);
            return this;
        }

        public IUsuarioBuilder SetDescricao(string descricao)
        {
            _usuario.Descricao = descricao;
            return this;
        }

        public IUsuarioBuilder SetCompetencias(List<string> competencias)
        {
            _usuario.Competencias = competencias;

            if (competencias != null && competencias.Count > 0)
            {
                _usuario.IsMonitor = true;
            }
            return this;
        }

        public Usuario Build()
        {
            Usuario produtoFinal = this._usuario;
            this.Reset();
            return produtoFinal;
        }
    }
}