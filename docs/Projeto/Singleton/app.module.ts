import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { ServicoDeMateriais } from './servico-de-materiais.service';
import { ServicoDeHabilidades } from './servico-de-habilidades.service';

@Module({
  imports: [
    DatabaseModule, 
  ],
  providers: [
    ServicoDeMateriais,    
    ServicoDeHabilidades,  
  ],
})
export class AppModule {}