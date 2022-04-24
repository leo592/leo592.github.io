"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProviders = void 0;
const User_entity_1 = require("./entities/User.entity");
exports.UserProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection) => connection.getRepository(User_entity_1.User),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=form.providers.js.map