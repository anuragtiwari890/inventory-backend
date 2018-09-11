import {Inventory, InventoryStatus, InventoryFactory} from "../entities/inventory"
import {BaseRepository} from "./base-repository";
import {EntitiesFactory, EntityFactory} from "../entities/entity";
import {MySqlConnectionPool} from "../utils/mysql-connection-pool";
import {sprintf} from "sprintf-js";

export class InventoryRepository extends BaseRepository<Inventory> {
    tableName = "inventory"
    entitiesFactory: EntitiesFactory<Inventory, EntityFactory<Inventory>>;

    constructor(mySqlConnectionPool: MySqlConnectionPool) {
        super(mySqlConnectionPool);
        this.entitiesFactory = new EntitiesFactory(new InventoryFactory())
    }

    public save(
        inventory: Inventory,
        onSuccess: (Inventory: any) => void,
        onError: (err: any) => void
    ) {
        let query = sprintf(
            "INSERT INTO `?`(`id`,`productId`, `batchId`, `vendorId`, `purchasePrice`, `quantity`, `status`, `approvalRequest`, `approvedBy`)Values(%(id)s, %(productId)s, %(batchId)s, %(vendorId)s, %(purchasePrice)s, %(quatity)s), %(status)s), %(approvalRequest)s), %(approvedBy)s)",
            {
                table: this.tableName,
                id: inventory.id,
                productId: inventory.product.id,
                batchId: inventory.batch.id,
                vendorId: inventory.vendor.id,
                purchasePrice: inventory.purchasePrice,
                quantity: inventory.quantity,
                status: inventory.status,
                approvalRequest: inventory.approvalRequest,
                approvedBy: inventory.approvedBy,

            });
        this.mySqlConnectionPool.connectionPool.query(
            query,
            (err: any, results: any, fields: any) =>
                err ? onError(err) : onSuccess(results)
        );
    }

    public fetchAll(onSuccess: (Entity: Inventory[]) => void, onError: (err: any) => void) {
        this.mySqlConnectionPool.connectionPool.query(
            "select * from ?",
            [this.tableName],
            (err: any, results: any, fields: any) =>
                (err) ? onError(err) : onSuccess(this.entitiesFactory.create(results))
        );
    }

    public FetchUnapproved(onSuccess: (Inventory: any) => void, onError: (err: any) => void) {

    }
}