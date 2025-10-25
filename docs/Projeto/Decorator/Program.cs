using SeiPossoEnsinar.Application.Services;
using System;

namespace SeiPossoEnsinar
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Demonstração do Padrão Decorator - Perfil de Usuário");
            Console.WriteLine("=====================================================");

            UsuarioService usuarioService = new UsuarioService();
            string perfilFormatado = usuarioService.GetPerfilFormatado(1);

            Console.WriteLine("\nPerfil completo do usuário:");
            Console.WriteLine(perfilFormatado);

            Console.WriteLine("\n=====================================================");
            Console.WriteLine("Fim da demonstração do Decorator Pattern");
        }
    }
}