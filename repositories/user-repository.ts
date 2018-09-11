import {User, UserFactory} from "../entities/user"
import {EntitiesFactory, EntityFactory} from "../entities/entity";
import {BaseRepository} from "../repositories/base-repository";
import {MySqlConnectionPool} from "../utils/mysql-connection-pool";

var MongoClient = require("mongodb").MongoClient;

export class UserModel extends BaseRepository<User> {
    tableName = "user"
    entitiesFactory: EntitiesFactory<User, EntityFactory<User>>;

    constructor(mySqlConnectionPool: MySqlConnectionPool) {
        super(mySqlConnectionPool);
        this.entitiesFactory = new EntitiesFactory(new UserFactory())
    }

    public save(
        user: User,
        onSuccess: (user: any) => void,
        onError: (err: any) => void
    ) {
        this.mySqlConnectionPool.connectionPool.query(
            "INSERT INTO `?`(`id`,`username`, `password`, `user_role`) Values(?, ?, ?, ?)",
            [this.tableName, user.id, user.username, user.password, user.userRoles],
            (err: any, results: any, fields: any) =>
                err ? onError(err) : onSuccess(results)
        );
    }

    public fetchByUsername(
        username: string,
        onSuccess: (user: any) => void,
        onError: (err: any) => void
    ) {
        this.mySqlConnectionPool.connectionPool.query(
            "select * from ? where username = ?",
            [this.tableName, username],
            (err: any, results: any, fields: any) =>
                (err) ? onError(err) : onSuccess(this.entitiesFactory.create(results))
        );
    }
}