import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entitys/usuario/usuario.entity';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { UsuarioService } from './services/usuario/usuario.service';
import { UsuarioController } from './controllers/usuario/usuario.controller';
@Module({
imports: [
TypeOrmModule.forRoot({
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'root',
password: '', // ou '123', dependendo do seu XAMPP
database: 'meu_banco',
entities: [Usuario],
synchronize: true, // em produção, mude para false
}),
UsuarioModule,
]
})
export class AppModule {}