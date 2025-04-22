import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/entitys/usuario/usuario.entity';
import { UsuarioService } from 'src/services/usuario/usuario.service';
import { UsuarioController } from 'src/controllers/usuario/usuario.controller';

@Module({
imports: [TypeOrmModule.forFeature([Usuario])], // <-- aqui está a mágica!
providers: [UsuarioService],
controllers: [UsuarioController],
})
export class UsuarioModule {}