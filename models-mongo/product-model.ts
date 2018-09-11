// import {Product} from "../entities/product"
// import {BaseModel} from "./base-model";

// var MongoClient = require("mongodb").MongoClient;

// export class ProductModel extends BaseModel {
//     CollectionName = "Product"

//     public save(
//         product: Product,
//         onSuccess: (product: any) => void,
//         onError: (err: any) => void
//     ) {
//         this.connectDB((client: any, collection: any) => {
//             collection.insert(product, (err: any, docs: any) => {
//                 if (err) {
//                     onError(err)
//                 } else {
//                     onSuccess(docs);
//                     client.close();
//                 }
//             });
//         })
//     }

//     public FetchAll(onSuccess: (Inventory: any) => void, onError: (err: any) => void) {
//         this.connectDB((client: any, collection: any) => {
//             collection.find({}).toArray((err: Error, docs: any) => {
//                 console.log("Found the following records");
//                 console.log(docs)
//                 onSuccess(docs);
//             });
//         })
//     }

//     public FetchByID(id: string, onSuccess: (Inventory: any) => void, onError: (err: any) => void) {
//         this.connectDB((client: any, collection: any) => {
//             collection.find({id: id}).toArray((err: Error, docs: any) => {
//                 console.log("Found the following records");
//                 console.log(docs)
//                 onSuccess(docs);
//             });
//         })
//     }


// }

// class ProductCollection {
//     id: string;
//     name: string;
//     type: string;
//     mrp: number;
//     created: Date;

//     constructor(
//         id: string,
//         name: string,
//         type: string,
//         mrp: number,
//         created: Date,
//     ) {
//         this.id = id
//         this.name = name;
//         this.type = type;
//         this.mrp = mrp;
//         this.created = created;
//     }
// }

// export class InventoryCollectionFactory {
//     getInventoryFromCollection(productCollection: ProductCollection): Product {
//         return new Product(
//             productCollection.id,
//             productCollection.name,
//             productCollection.type,
//             productCollection.mrp,
//             productCollection.created
//         );
//     }

//     getCollectionFromInventory(product: Product): ProductCollection {
//         return new ProductCollection(
//             product.id,
//             product.name,
//             product.type,
//             product.mrp,
//             product.created
//         );
//     }
// }