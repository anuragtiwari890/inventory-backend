import {ProductType, ProductTypeFactory} from "./product-type";
import {Entity, EntityFactory, EntitiesFactory} from "./entity";

const uuidv4 = require('uuid/v4');

export class Product extends Entity {
    name: string;
    type: ProductType;
    description: string;
    mrp: number;


    constructor(
        id: string,
        name: string,
        type: ProductType,
        description: string,
        mrp: number,
        created: Date
    ) {
        super(id, created)
        this.name = name;
        this.type = type;
        this.description = description;
        this.mrp = mrp;
    }
}

export class ProductFactory implements EntityFactory<Product> {
    public create(obj: any): Product {
        return new Product(
            obj.id,
            obj.name,
            new ProductTypeFactory().create(obj.type),
            obj.description,
            obj.mrp,
            obj.created
        )
    }

    public sanitize(obj: any): Product {
        obj.id = obj.id || uuidv4();
        if (!obj.id) {
            throw "Product Id is undefiend";
        } else if (!obj.name) {
            throw "Product vendor is undefiend";
        } else if (!obj.type.id) {
            throw "Product's type is undefiend";
        } else if (!obj.mrp) {
            throw "Product mrp is undefiend";
        } else {
            return this.create(obj)
        }
    }
}

export class ProductModelFactory implements EntityFactory<Product> {
    public create(obj: any): Product {
        return new Product(
            obj.id,
            obj.name,
            new ProductTypeFactory().create(obj.type),
            obj.description,
            obj.mrp,
            obj.created
        )
    }

    public sanitize(obj: any): Product {
        obj.id = obj.id || uuidv4();
        if (!obj.id) {
            throw "Product Id is undefiend";
        } else if (!obj.name) {
            throw "Product vendor is undefiend";
        } else if (!obj.type.id) {
            throw "Product's type is undefiend";
        } else if (!obj.mrp) {
            throw "Product mrp is undefiend";
        } else {
            return this.create(obj)
        }
    }
}