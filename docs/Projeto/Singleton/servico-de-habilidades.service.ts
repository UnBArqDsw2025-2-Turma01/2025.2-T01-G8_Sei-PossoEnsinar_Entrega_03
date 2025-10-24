import { Injectable, Logger } from '@nestjs/common';
import { DatabaseConnectionPoolService } from './database-connection-pool.service';

@Injectable()
export class ServicoDeHabilidades {
  private readonly logger = new Logger(ServicoDeHabilidades.name);

  // Injeta o mesmo Singleton do Pool de Conexão aqui
  constructor(
    private readonly dbService: DatabaseConnectionPoolService,
  ) {
    this.logger.log('ServicoDeHabilidades inicializado.');
  }

  // Método para checarmos o ID do pool que ele está usando
  public getDbInstanceId(): string {
    this.logger.log('ServicoDeHabilidades está pedindo o ID do DB Pool...');
    return this.dbService.getPoolInstanceId();
  }
}