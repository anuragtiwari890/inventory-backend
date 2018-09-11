import {BaseRepository} from "../repositories/base-repository";
import {Entity} from "../entities/entity"


export class FetchAllEntitiesIntent<T extends Entity> {
    repository: BaseRepository<T>

    constructor(repository: BaseRepository<T>) {
        this.repository = repository
    }

    public impl(
        onSucces: (entites: T[]) => void,
        onError: (err: any) => void
    ) {
        this.repository.fetchAll(onSucces, onError);
    }
}