import {Product, ProductFactory} from "./product";
import {Vendor, VendorFactory} from "./vendor";
import {Batch, BatchFactory} from "./batch";
import {Entity, EntityFactory, EntitiesFactory} from "./entity";
import {BADHINTS} from "dns";

const uuidv4 = require('uuid/v4');

export enum InventoryStatus {
    Unapproved,
    Approved,
    Deleted
}

type InventoryStatusType = InventoryStatus.Unapproved | InventoryStatus.Approved | InventoryStatus.Deleted;

export class Inventory extends Entity {
    product: Product;
    vendor: Vendor;
    batch: Batch;
    purchasePrice: number;
    quantity: number;
    status: InventoryStatusType;
    approvalRequest: string;
    approvedBy: string;

    constructor(
        id: string,
        product: Product,
        vendor: Vendor,
        batch: Batch,
        purchasePrice: number,
        quantity: number,
        status: InventoryStatusType,
        approvalRequest: string,
        approvedBy: string,
        created: Date
    ) {
        super(id, created)
        this.product = product;
        this.vendor = vendor;
        this.batch = batch;
        this.purchasePrice = purchasePrice;
        this.quantity = quantity;
        this.status = status || 0;
        this.approvalRequest = approvalRequest;
        this.approvedBy = approvedBy;
    }
}

export class InventoryFactory implements EntityFactory<Inventory> {
    public create(obj: any): Inventory {
        obj.id = obj.id || uuidv4();
        return new Inventory(
            obj.id,
            new ProductFactory().create(obj.product),
            new VendorFactory().create(obj.vendor),
            new BatchFactory().create(obj.batch),
            obj.purchasePrice,
            obj.quantity,
            obj.status,
            obj.approvalRequest,
            obj.approvedBy,
            obj.created || new Date
        )
    }

    public sanitize(obj: any): Inventory {
        obj.id = obj.id || uuidv4();
        if (!obj.id) {
            throw "Inventory Id is undefiend";
        } else if (!obj.product.id) {
            throw "Inventory product Id is undefiend";
        } else if (!obj.vendor.id) {
            throw "Inventory vendor undefiend";
        } else if (!obj.batch.id) {
            throw "Inventory batch Number undefiend";
        } else if (!obj.purchasePrice) {
            throw "Inventory purchase price is undefiend";
        } else if (!obj.quantity) {
            throw "Inventory quatity is undefiend";
        } else {
            return this.create(obj)
        }
    }
}