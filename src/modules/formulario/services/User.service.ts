import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/User.entity';
@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private UserRepository: Repository<User>,
  ) {}

  async add(nuevo: User): Promise<User> {
    const xnuevo = this.UserRepository.create(nuevo);
    return await this.UserRepository.save(xnuevo);
  }

  async edit(key: number, nuevo: User) {
    return await this.UserRepository.update({ id: key }, nuevo);
  }

  async delete(key: any) {
    const borrar = await this.UserRepository.findOne(key);
    if (!borrar) throw new NotFoundException('Elemento no encontrado');
    return await this.UserRepository.remove(borrar);
  }

  async find() {
    return await this.UserRepository.find();
  }
}
