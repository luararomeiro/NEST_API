import { Controller, Get } from '@nestjs/common';
import { UsuarioService } from 'src/services/usuario/usuario.service';
@Controller('usuarios')
export class UsuarioController {
constructor(private readonly usuarioService: UsuarioService) {}
@Get()
findAll() {
return this.usuarioService.findAll();
}
}