import {Product, ProductFactory} from "../entities/product"
import {BaseRepository} from "./base-repository";
import {EntitiesFactory, EntityFactory} from "../entities/entity";
import {MySqlConnectionPool} from "../utils/mysql-connection-pool";

export class ProductRepository extends BaseRepository<Product> {
    tableName = "product"
    entitiesFactory: EntitiesFactory<Product, EntityFactory<Product>>;

    constructor(mySqlConnectionPool: MySqlConnectionPool) {
        super(mySqlConnectionPool);
        this.entitiesFactory = new EntitiesFactory(new ProductFactory())
    }

    public save(
        product: Product,
        onSuccess: (product: any) => void,
        onError: (err: any) => void
    ) {
        this.mySqlConnectionPool.connectionPool.query(
            "INSERT INTO `?`(`id`,`name`, `type`, `description`, `mrp`) Values(?, ?)",
            [this.tableName, product.id, product.name, product.type.id, product],
            (err: any, results: any, fields: any) =>
                err ? onError(err) : onSuccess(results)
        );
    }

    public fetchAll(
        onSuccess: (Entity: Product[]) => void,
        onError: (err: any) => void
    ) {
        this.mySqlConnectionPool.connectionPool.query(
            "select * from ? ",
            [this.tableName],
            (err: any, results: any, fields: any) =>
                (err) ? onError(err) : onSuccess(this.entitiesFactory.create(results))
        );
    }
}