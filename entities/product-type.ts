import {Entity, EntityFactory} from "./entity";

const uuidv4 = require('uuid/v4');

export class ProductType extends Entity {
    name: string;

    constructor(id: string, name: string, created: Date) {
        super(id, created)
        this.name = name;
        this.created = created || new Date();
    }
}

export class ProductTypeFactory implements EntityFactory<ProductType> {
    public create(obj: any): ProductType {
        return new ProductType(obj.id, obj.name, obj.created)
    }

    public sanitize(obj: any): ProductType {
        obj.id = obj.id || uuidv4()
        if (!obj.id) {
            throw "Id of product type is undefiend";
        } else if (!obj.name) {
            throw "Product name undefiend";
        } else {
            return this.create(obj)
        }
    }
}