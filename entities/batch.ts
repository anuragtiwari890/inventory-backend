import {Entity, EntityFactory} from "./entity";

const uuidv4 = require('uuid/v4');

export class Batch extends Entity {
    date: Date;
    constructor(id: string, date: Date, created: Date) {
        super(id, created);
        this.date = date;
    }
}

export class BatchFactory implements EntityFactory<Batch> {
    public create(obj: any): Batch {
        return new Batch(obj.id, obj.date, obj.created);
    }

    public sanitize(obj: any): Batch {
        obj.id = obj.id || uuidv4()

        if (!obj.id) {
            throw "Batch Id undefiend";
        } else if (!obj.date) {
            throw "Batch date is undefiend";
        } else {
            return this.create(obj)
        }
    }
}