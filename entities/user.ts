import {Entity} from "./entity";

const uuidv4 = require('uuid/v4');

enum UserRole {
    StorManager,
    StorAssitant,
}

export class User extends Entity {
    username: string;
    password: string;
    userRoles: [number];

    constructor(id: string, username: string, password: string, userRoles: [number], created: Date) {
        super(id, created)
        this.username = username;
        this.password = password;
        this.userRoles = userRoles;
    }
}

export class UserFactory {
    public create(obj: any): User {
        return new User(
            obj.id,
            obj.username,
            obj.password,
            obj.userRoles,
            obj.created,
        );
    }

    public sanitize(obj: any): User {
        obj.id = obj.id || uuidv4();

        if (!obj.username && obj.username.lenght < 4) {
            throw "Username is inalid"
        } else if (!obj.password && obj.password.lenght < 10) {
            throw "password is invalid"
        } else if (!obj.userRoles && obj.userRole.length == 0) {
            throw "UserRole is invalid"
        } else if (obj.userRoles.length > 0) {
            obj.userRole.forEach((role: any) => {
                if (!(role in UserRole)) {
                    throw "UserRole is invalid";
                }
            });
        }

        return this.create(obj)
    }
}