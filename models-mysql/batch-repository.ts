// import {Repository} from "./repository";
// import {ProductType} from "../entities/product-type";
// import {ProductTypeModel} from "../models-mysql/product-type-model";
// import {MySqlConnectionPool} from "../models-mysql/mysql-connection-pool";

// export interface ProductTypeRepository extends Repository<ProductType> {
//     save(
//         productType: ProductType,
//         onSuccess: (productType: ProductType) => void,
//         onError: (err: any) => void
//     ): void

//     fetchAll(
//         onSuccess: (productsType: ProductType[]) => void,
//         onError: (err: any) => void
//     ): void
// }

// export class ProductTypeRepositoryImpl implements ProductTypeRepository {
//     productTypeModel: ProductTypeModel

//     constructor(mySqlConnectionPool: MySqlConnectionPool) {
//         this.productTypeModel = new ProductTypeModel(mySqlConnectionPool);
//     }

//     public save(
//         productType: ProductType,
//         onSuccess: (productType: ProductType) => void,
//         onError: (err: any) => void
//     ) {
//         this.productTypeModel.save(productType, onSuccess, onError)
//     }

//     public fetchAll(
//         onSuccess: (productsType: ProductType[]) => void,
//         onError: (err: any) => void
//     ) {
//         this.productTypeModel.fetchAll(onSuccess, onError);
//     }
// }