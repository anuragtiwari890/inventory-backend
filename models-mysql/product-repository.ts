// import {Product} from "../entities/product";
// import {ProductModel} from "../models/product-model";
// import {Repository} from "./repository";

// export interface ProductRepository extends Repository<Product> {
//     save(
//         product: Product,
//         onSuccess: (product: Product) => void,
//         onError: (err: any) => void
//     ): void

//     fetchAll(
//         onSuccess: (products: [Product]) => void,
//         onError: (err: any) => void
//     ): void

//     fetchById(
//         id: string,
//         onSuccess: (product: Product) => void,
//         onError: (err: any) => void
//     ): void
// }

// export class ProductRepositoryImpl implements ProductRepository {
//     productModel: ProductModel

//     constructor() {
//         // TODO: use dependecy injection
//         this.productModel = new ProductModel();
//     }

//     public save(
//         product: Product,
//         onSuccess: (product: Product) => void,
//         onError: (err: any) => void
//     ) {
//         this.productModel.save(product, onSuccess, onError)
//     }

//     public fetchById(
//         id: string,
//         onSuccess: (product: Product) => void,
//         onError: (err: any) => void
//     ) {
//         this.productModel.FetchByID(id, onSuccess, onError)
//     }

//     public fetchAll(
//         onSuccess: (products: [Product]) => void,
//         onError: (err: any) => void
//     ) {
//         this.productModel.FetchAll(onSuccess, onError);
//     }
// }