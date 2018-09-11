import {create} from "domain";

export abstract class Entity {
    id: string;
    created: Date;

    constructor(id: string, created: Date) {
        this.id = id;
        this.created = created;
    }
}

export interface EntityFactory<T extends Entity> {
    create(obj: any): T
    sanitize(obj: any): T
}

export class EntitiesFactory<T extends Entity, F extends EntityFactory<T>> {
    private factory: F;

    constructor(factory: F) {
        this.factory = factory
    }

    public create(objs: any): T[] {
        let ret: T[] = [];

        objs && objs.forEach((product: any) => {
            ret.push(this.factory.create(product))
        });

        return ret
    }

    public sanitize(objs: any): T[] {
        let ret: T[] = [];

        objs && objs.forEach((product: any) => {
            ret.push(this.factory.sanitize(product))
        });

        return ret;
    }
}