import { Connection } from 'typeorm';
import { User } from './entities/User.entity';
export declare const UserProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<User>;
    inject: string[];
}[];
