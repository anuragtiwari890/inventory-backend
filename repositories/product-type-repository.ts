import {MySqlConnectionPool} from "../utils/mysql-connection-pool";
import {ProductType, ProductTypeFactory} from "../entities/product-type";
import {EntitiesFactory, EntityFactory} from "../entities/entity";
import {BaseRepository} from "../repositories/base-repository";
import {sprintf} from "sprintf-js";

export class ProductTypeRepository extends BaseRepository<ProductType> {
    tableName = "product_type"
    entitiesFactory: EntitiesFactory<ProductType, EntityFactory<ProductType>>;

    constructor(mySqlConnectionPool: MySqlConnectionPool) {
        super(mySqlConnectionPool);
        this.entitiesFactory = new EntitiesFactory(new ProductTypeFactory())
    }

    public save(
        productType: ProductType,
        onSuccess: (user: any) => void,
        onError: (err: any) => void
    ) {
        let query = sprintf("INSERT INTO `%(table)s`(`id`,`name`) Values('%(id)s', '%(name)s')", {
            table: this.tableName, id: productType.id, name: productType.name
        });
        this.mySqlConnectionPool.connectionPool.query(
            query,
            (err: any, results: any, fields: any) =>
                err ? onError(err) : onSuccess(results)
        );
    }
}