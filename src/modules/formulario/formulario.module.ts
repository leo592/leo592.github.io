import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { UserController } from './controllers/User.controller';
import { UserService } from './services/User.service';
import { UserProviders } from './form.providers';
@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...UserProviders, UserService],
})
export class UsuarioModule {}
