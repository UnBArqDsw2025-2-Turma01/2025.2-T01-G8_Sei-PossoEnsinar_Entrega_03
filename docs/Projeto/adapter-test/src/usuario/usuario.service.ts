import { Injectable, NotFoundException } from '@nestjs/common';

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

@Injectable()
export class UsuarioService {
  private readonly usuarios: Usuario[] = [
    { id: 1, nome: 'João Victor', email: 'joaovictor@gmail.com', senha: '123' },
    { id: 2, nome: 'Aluno Teste', email: 'aluno@gmail.com', senha: '456' },
  ];

  constructor() {
    console.log('LOG: UsuarioService (o serviço ORIGINAL) foi inicializado.');
  }


  async findUsuarioById(userId: number): Promise<Usuario> {
    console.log(`LOG: [UsuarioService] Buscando usuário COMPLETO com ID: ${userId}`);
    const usuario = this.usuarios.find(u => u.id === userId);
    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${userId} não encontrado.`);
    }
    return usuario;
  }

  async cadastrar(dto: any): Promise<Usuario> {
    console.log('LOG: [UsuarioService] Método complexo de CADASTRO chamado.');
    return this.usuarios[0];
  }
}