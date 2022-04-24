import { Controller, Get, Post, Render, Body } from '@nestjs/common';
import { CreateUsuarioDto } from '../dto/create-User.dto';
import { UserService } from '../services/User.service';
@Controller('User')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('form')
  @Render('usuarios/form')
  form() {
    return {};
  }
  @Post('')
  add(@Body() datos: CreateUsuarioDto) {
    return datos;
  }
  @Post('update')
  edit() {
    return {};
  }
  @Post('usuarios/:id')
  delete() {
    return {};
  }
  @Get('')
  @Render('usuarios/index')
  list() {
    return {};
  }
}
