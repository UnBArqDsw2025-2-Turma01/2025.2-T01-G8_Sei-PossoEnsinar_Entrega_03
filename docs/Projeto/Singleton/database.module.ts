import { Module, Global } from '@nestjs/common';
import { DatabaseConnectionPoolService } from './database-connection-pool.service';

@Global() 
@Module({
  providers: [DatabaseConnectionPoolService], 
  exports: [DatabaseConnectionPoolService], 
})
export class DatabaseModule {}