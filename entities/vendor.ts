import {Entity, EntityFactory} from "./entity";

const uuidv4 = require('uuid/v4');

export class Vendor extends Entity {
    name: string;
    email: string;
    phone: string;

    constructor(id: string, name: string, email: string, phone: string, created: Date) {
        super(id, created);
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

export class VendorFactory implements EntityFactory<Vendor> {
    public create(obj: any): Vendor {
        return new Vendor(obj.id, obj.name, obj.email, obj.phone, obj.created);
    }

    public sanitize(obj: any): Vendor {
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