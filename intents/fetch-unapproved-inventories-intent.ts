import {InventoryRepository} from "../repositories/inventory-repository";
import {Inventory} from "../entities/inventory";


export class FetchUnapprovedInventoriesIntent {

    inventoryRepository: InventoryRepository

    constructor(
        inventoryRepository: InventoryRepository
    ) {
        this.inventoryRepository = inventoryRepository
    }

    public impl(
        onSuccess: (inventory: Inventory[]) => void,
        onError: (err: any) => void
    ) {
        // this.inventoryRepository.fetchUnapprovedInventories(onSuccess, onError)
    }
}