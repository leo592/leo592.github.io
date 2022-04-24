import { Repository } from 'typeorm';
import { User } from '../entities/User.entity';
export declare class UserService {
    private UserRepository;
    constructor(UserRepository: Repository<User>);
    add(nuevo: User): Promise<User>;
    edit(key: number, nuevo: User): Promise<import("typeorm").UpdateResult>;
    delete(key: any): Promise<User>;
    find(): Promise<User[]>;
}
