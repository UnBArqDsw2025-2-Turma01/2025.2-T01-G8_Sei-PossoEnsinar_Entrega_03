import { Injectable, Logger } from '@nestjs/common';
import { DatabaseConnectionPoolService } from './database-connection-pool.service';

@Injectable()
export class ServicoDeMateriais {
  private readonly logger = new Logger(ServicoDeMateriais.name);

  // Injeta o Singleton do Pool de Conexão aqui
  constructor(
    private readonly dbService: DatabaseConnectionPoolService,
  ) {
    this.logger.log('ServicoDeMateriais inicializado.');
  }

  // Método para checarmos o ID do pool que ele está usando
  public getDbInstanceId(): string {
    this.logger.log('ServicoDeMateriais está pedindo o ID do DB Pool...');
    return this.dbService.getPoolInstanceId();
  }
}