// import {Inventory} from "../entities/inventory";
// import {InventoryModel} from "../models/inventory-model";
// import {Repository} from "./repository";

// export interface InventoryRepository extends Repository<Inventory> {
//     fetchUnapprovedInventories(
//         onSuccess: (Inventories: [Inventory]) => void,
//         onError: (err: any) => void
//     ): any
// }

// export class InventoryRepositoryImpl implements InventoryRepository {
//     inventoryModel: InventoryModel

//     constructor() {
//         // TODO: use dependecy injection
//         this.inventoryModel = new InventoryModel();
//     }

//     public save(
//         inventory: Inventory,
//         onSuccess: (Inventory: Inventory) => void,
//         onError: (err: any) => void
//     ) {
//         this.fetchAll((inventories) => {
//             try {
//                 inventories && inventories.forEach((i) => {
//                     if (
//                         i.product.id == inventory.product.id &&
//                         i.batchNum == inventory.batchNum &&
//                         i.id != inventory.id
//                     ) {
//                         throw "duplicate Inventory item"
//                     }
//                 });

//                 this.inventoryModel.save(inventory, onSuccess, onError)
//             } catch (e) {
//                 onError("unable to save inventory")
//             }

//         }, onError);
//     }

//     public fetchAll(
//         onSuccess: (Inventories: [Inventory]) => void,
//         onError: (err: any) => void
//     ) {
//         this.inventoryModel.FetchAll(onSuccess, onError);
//     }

//     public fetchUnapprovedInventories(
//         onSuccess: (Inventories: [Inventory]) => void,
//         onError: (err: any) => void
//     ) {
//         this.inventoryModel.FetchUnapproved(onSuccess, onError);
//     }
// }