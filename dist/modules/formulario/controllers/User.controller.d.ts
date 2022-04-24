import { CreateUsuarioDto } from '../dto/create-User.dto';
import { UserService } from '../services/User.service';
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UserService);
    form(): {};
    add(datos: CreateUsuarioDto): CreateUsuarioDto;
    edit(): {};
    delete(): {};
    list(): {};
}
