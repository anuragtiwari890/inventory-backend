import {MySqlConnectionPool} from "../utils/mysql-connection-pool";
import {Vendor, VendorFactory} from "../entities/Vendor";
import {EntitiesFactory, EntityFactory} from "../entities/entity";
import {BaseRepository} from "../repositories/base-repository";

export class VendorRepository extends BaseRepository<Vendor> {
    tableName = "vendor"
    entitiesFactory: EntitiesFactory<Vendor, EntityFactory<Vendor>>;

    constructor(mySqlConnectionPool: MySqlConnectionPool) {
        super(mySqlConnectionPool);
        this.entitiesFactory = new EntitiesFactory(new VendorFactory())
    }

    public save(
        vendor: Vendor,
        onSuccess: (user: any) => void,
        onError: (err: any) => void
    ) {
        this.mySqlConnectionPool.connectionPool.query(
            "INSERT INTO `?`(`id`,`name`, `email`, `phone`) Values(?, ?, ?, ?)",
            [this.tableName, vendor.id, vendor.name, vendor.email, vendor.phone],
            (err: any, results: any, fields: any) =>
                err ? onError(err) : onSuccess(results)
        );
    }
}