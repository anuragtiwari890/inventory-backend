import {MySqlConnectionPool} from "../utils/mysql-connection-pool";
import {Batch, BatchFactory} from "../entities/batch";
import {EntitiesFactory, EntityFactory} from "../entities/entity";
import {BaseRepository} from "../repositories/base-repository";
import {sprintf} from "sprintf-js";

export class BatchRepository extends BaseRepository<Batch> {
    tableName = "batch"
    entitiesFactory: EntitiesFactory<Batch, EntityFactory<Batch>>;

    constructor(mySqlConnectionPool: MySqlConnectionPool) {
        super(mySqlConnectionPool);
        this.entitiesFactory = new EntitiesFactory(new BatchFactory())
    }

    public save(
        batch: Batch,
        onSuccess: (user: any) => void,
        onError: (err: any) => void
    ) {
        let query = sprintf("INSERT INTO `%(table)s`(`id`,`date`) Values('%(id)s', '%(date)s')", {
            table: this.tableName, id: batch.id, name: batch.date
        });
        this.mySqlConnectionPool.connectionPool.query(
            query,
            (err: any, results: any, fields: any) => {
                if (err) {
                    onError(err);
                }
                else {
                    console.log('The solution is: ', results);
                    onSuccess(results);
                }
            });
    }
}