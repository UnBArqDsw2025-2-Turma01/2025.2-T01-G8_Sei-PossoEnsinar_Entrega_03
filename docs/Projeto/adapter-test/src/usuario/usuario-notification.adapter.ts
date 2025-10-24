import { Injectable, NotFoundException } from '@nestjs/common';
import { NotifiableUserService } from './interfaces/INotifiableUserService.interface';
import { UsuarioService } from './usuario.service';

@Injectable()
export class UsuarioNotificationAdapter implements NotifiableUserService {
  constructor(
    private readonly usuarioService: UsuarioService
  ) {
    console.log('LOG: UsuarioNotificationAdapter (o TRADUTOR) foi inicializado.');
  }

  async getNotificationDetails(
    userId: number,
  ): Promise<{ nome: string; email: string }> {
    console.log(`LOG: [Adapter] Recebeu chamada para getNotificationDetails(${userId})`);
    
    const usuarioCompleto = await this.usuarioService.findUsuarioById(userId);
    console.log(`LOG: [Adapter] Usuário completo recebido do UsuarioService.`);

    const dadosAdaptados = {
      nome: usuarioCompleto.nome,
      email: usuarioCompleto.email,
    };
    
    console.log(`LOG: [Adapter] Traduzindo para o formato simples:`, dadosAdaptados);
    return dadosAdaptados;
  }
}