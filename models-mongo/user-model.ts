// import {User} from "../entities/user"
// import {BaseModel} from "./base-model";

// var MongoClient = require("mongodb").MongoClient;

// export class UserModel extends BaseModel {
//     CollectionName = "User"

//     public save(
//         user: User,
//         onSuccess: (user: any) => void,
//         onError: (err: any) => void
//     ) {
//         let userCollection = new UserCollectionFactory()
//         this.connectDB((client: any, collection: any) => {
//             collection.insert(user, (err: any, docs: any) => {
//                 if (err) {
//                     onError(err)
//                 } else {
//                     onSuccess(userCollection.getUserFromCollection);
//                     client.close();
//                 }
//             });
//         });
//     }

//     public fetchByUsername(
//         username: string,
//         onSuccess: (user: any) => void,
//         onError: (err: any) => void
//     ) {
//         this.connectDB((client: any, collection: any) => {
//             collection.find({username: username}).toArray((err: Error, docs: any) => {
//                 console.log(docs)
//                 onSuccess(docs);
//             });
//         });
//     }
// }

// class UserCollection {
//     _id: string;
//     username: string;
//     password: string;
//     userRoles: [number]

//     constructor(_id: string, username: string, password: string, userRoles: [number]) {
//         this._id = _id;
//         this.username = username;
//         this.password = password;
//         this.userRoles = userRoles;
//     }
// }

// export class UserCollectionFactory {
//     getUserFromCollection(userCollection: UserCollection): User {
//         return new User(
//             userCollection._id,
//             userCollection.username,
//             userCollection.password,
//             userCollection.userRoles,
//         );
//     }

//     getCollectionFromUser(user: User): UserCollection {
//         return new UserCollection(
//             user.id,
//             user.username,
//             user.password,
//             user.userRoles,
//         );
//     }
// }