import { Injectable, Inject } from '@nestjs/common';
import { 
  NotifiableUserService, 
  NOTIFIABLE_USER_SERVICE 
} from '../usuario/interfaces/INotifiableUserService.interface';

@Injectable()
export class NotificacaoService {
  constructor(
    @Inject(NOTIFIABLE_USER_SERVICE)
    private readonly userService: NotifiableUserService,
  ) {
    console.log('LOG: NotificacaoService (o CLIENTE) foi inicializado.');
  }

  async enviarNotificacaoParaUsuario(userId: number, mensagem: string): Promise<void> {
    console.log(`\n--- [NotificacaoService] INICIANDO TESTE para ID: ${userId} ---`);

    const userDetails = await this.userService.getNotificationDetails(
      userId,
    );

    console.log(`LOG: [NotificacaoService] Detalhes recebidos do adapter:`, userDetails);
    console.log(`LOG: [NotificacaoService] ENVIANDO EMAIL para ${userDetails.nome} (${userDetails.email}): ${mensagem}`);
    console.log(`--- [NotificacaoService] TESTE FINALIZADO ---`);
  }
}