import {Entity, EntityFactory} from "../entities/entity";
import {MySqlConnectionPool} from "../utils/mysql-connection-pool";
import {EntitiesFactory} from "../entities/entity";

export abstract class BaseRepository<T extends Entity> {
    abstract tableName: string
    abstract entitiesFactory: EntitiesFactory<T, EntityFactory<T>>;
    abstract save(Entity: T, onSuccess: (user: any) => void, onError: (err: any) => void): void

    mySqlConnectionPool: MySqlConnectionPool

    constructor(mySqlConnectionPool: MySqlConnectionPool) {
        this.mySqlConnectionPool = mySqlConnectionPool;
    }

    public fetchAll(
        onSuccess: (Entity: T[]) => void,
        onError: (err: any) => void
    ) {
        console.log("I am called baby")
        this.mySqlConnectionPool.connectionPool.query(
            "select * from " + this.tableName,
            (err: any, results: any, fields: any) => {
                console.log(results);
                (err) ? onError(err) : onSuccess(this.entitiesFactory.create(results))
            }
        );
    }
}