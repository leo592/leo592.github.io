import { CreateUsuarioDto } from '../dto/create-form.dto';
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
