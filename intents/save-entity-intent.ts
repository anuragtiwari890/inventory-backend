import {BaseRepository} from "../repositories/base-repository";
import {Entity, EntitiesFactory, EntityFactory} from "../entities/entity"


export class SaveEntityIntent<T extends Entity, F extends EntityFactory<T>, K extends EntitiesFactory<T, F>> {
    repository: BaseRepository<T>

    constructor(repository: BaseRepository<T>) {
        this.repository = repository
    }

    public impl(
        entities: any,
        entitiesFactory: K,
        onSucces: (entites: T[]) => void,
        onError: (err: any) => void
    ) {
        try {
            let sanitizesEntities: T[] = entitiesFactory.sanitize(entities);

            // Asyn logic
            let fn = (entityIndex: any) => {
                this.repository.save(
                    sanitizesEntities[entityIndex],
                    (entity: T) => {
                        if (entityIndex == sanitizesEntities.length - 1) {
                            onSucces(sanitizesEntities)
                        } else {
                            fn(entityIndex + 1)
                        }
                    },
                    (err) => {
                        console.error("error while saving Entity", err)
                        onError("error occured")
                    }
                );
            }

            fn(0);
        } catch (e) {
            console.error("error in saveinventory intent", e);
            onError("error in save inventory intent")
        }
    }
}