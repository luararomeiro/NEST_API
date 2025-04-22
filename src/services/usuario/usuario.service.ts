import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/entitys/usuario/usuario.entity';
@Injectable()
export class UsuarioService {
constructor(
@InjectRepository(Usuario)
private usuarioRepository: Repository<Usuario>,
) {}
findAll(): Promise<Usuario[]> {
return this.usuarioRepository.find();
}
}