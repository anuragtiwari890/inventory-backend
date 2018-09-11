// import {Inventory, InventoryStatus, InventoryFactory} from "../entities/inventory"
// import {BaseModel} from "./base-model";
// import {ProductModel} from "./product-model";
// import {Product} from "../entities/product";

// var MongoClient = require("mongodb").MongoClient;

// export class InventoryModel extends BaseModel {
//     CollectionName = "Inventory"

//     public save(
//         inventory: Inventory,
//         onSuccess: (Inventory: any) => void,
//         onError: (err: any) => void
//     ) {
//         let inventoryCollection = new InventoryCollectionFactory()

//         // this.connectDB((client: any, collection: any) => {
//         //     if (collection) {
//         //         console.log("found connection")
//         //         let inventoryDocument = inventoryCollection.getInventoryCollectionFromInventory(inventory);
//         //         collection.insert(inventoryDocument, (err: any, docs: any) => {
//         //             if (err) {
//         //                 onError(err)
//         //             } else {
//         //                 onSuccess(inventoryCollection.getInventoryFromInventoryCollection(docs));
//         //                 // client.close();
//         //             }
//         //         });
//         //     } else {
//         //         console.log("found not found connection")
//         //         onError("error in connection")
//         //     }
//         // })
//     }

//     public FetchAll(onSuccess: (Inventory: any) => void, onError: (err: any) => void) {
//         console.log("M i Here")
//         let inventoryCollection = new InventoryCollectionFactory();
//         MongoClient.connect(this.mongoURL)
//             .then((conn: any) => {
//                 return conn.db(this.mongoDbName).collection(this.CollectionName)
//                     .find().toArray()
//                     .then((out: any) => console.log(out))
//                     .catch((err: any) => console.log("Fetching Data error", err))
//                     .then(() => conn.close())
//             }).catch((err: any) => console.log("There seems to be an error"))


//         // this.connectDB((client: any, collection: any) => {
//         //     if (collection) {
//         //         collection.find({}).toArray((err: Error, docs: any) => {
//         //             if (err) {
//         //                 onError("error while finding the records")
//         //             } else {
//         //                 onSuccess(docs && docs.map((doc: any) => {
//         //                     return inventoryCollection.getInventoryFromInventoryCollection(doc)
//         //                 }));
//         //             }
//         //             // client.close();
//         //         });
//         //     } else {
//         //         console.log("found not found connection")
//         //         onError("error in connection")
//         //     }
//         // })
//     }

//     public FetchUnapproved(onSuccess: (Inventory: any) => void, onError: (err: any) => void) {
//         let inventoryCollection = new InventoryCollectionFactory();
//         // this.connectDB((client: any, collection: any) => {
//         //     if (collection) {
//         //         collection.find({status: InventoryStatus.Unapproved}).toArray((err: Error, docs: any) => {
//         //             if (err) {
//         //                 onError("error while finding the records")
//         //             } else {
//         //                 onSuccess(docs && docs.map((doc: any) => {
//         //                     return inventoryCollection.getInventoryFromInventoryCollection(doc)
//         //                 }));
//         //                 // client.close();
//         //             }
//         //         });
//         //     } else {
//         //         console.log("found not found connection")
//         //         onError("error in connection")
//         //     }
//         // })
//     }
// }

// class InventoryCollection {
//     _id: string;
//     productId: string;
//     vendor: string;
//     batchNum: number;
//     batchDate: Date;
//     purchasePrice: number;
//     quantity: number;
//     status: number;
//     created: string;

//     constructor(
//         _id: string,
//         productId: string,
//         vendor: string,
//         batchNum: number,
//         batchDate: Date,
//         purchasePrice: number,
//         quantity: number,
//         status: number,
//         created: string
//     ) {
//         this._id = _id;
//         this.productId = productId;
//         this.vendor = vendor;
//         this.batchNum = batchNum;
//         this.batchDate = batchDate;
//         this.purchasePrice = purchasePrice;
//         this.quantity = quantity;
//         this.status = status;
//         this.created = created;
//     }
// }

// export class InventoryCollectionFactory {
//     productModel: ProductModel

//     constructor() {
//         this.productModel = new ProductModel()
//     }

//     getInventoryFromInventoryCollection(inventoryCollection: InventoryCollection): Inventory {
//         return new InventoryFactory().create({
//             id: inventoryCollection._id,
//             product: new Product(inventoryCollection.productId, "", "", 0, new Date()),
//             vendor: inventoryCollection.vendor,
//             batchNum: inventoryCollection.batchNum,
//             batchDate: inventoryCollection.batchDate,
//             purchasePrice: inventoryCollection.purchasePrice,
//             quantity: inventoryCollection.quantity,
//             status: inventoryCollection.status,
//             created: inventoryCollection.created
//         })
//     }

//     getInventoryCollectionFromInventory(inventory: Inventory): InventoryCollection {
//         return new InventoryCollection(
//             inventory.id,
//             inventory.product.id,
//             inventory.vendor,
//             inventory.batchNum,
//             inventory.batchDate,
//             inventory.purchasePrice,
//             inventory.quantity,
//             inventory.status,
//             inventory.created
//         )
//     }
// }