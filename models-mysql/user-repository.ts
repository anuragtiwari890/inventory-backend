// import {User} from "../entities/user";
// import {UserModel} from "../models/user-model";

// export interface UserRepository {
//     save(
//         User: User,
//         onSuccess: (User: User) => void,
//         onError: (err: any) => void
//     ): any

//     fetchByUsername(
//         username: string,
//         onSuccess: (user: User) => void,
//         onError: (err: any) => void
//     ): any
// }

// export class UserRepository {
//     userModel: UserModel

//     constructor() {
//         // TODO: use dependecy injection
//         this.userModel = new UserModel();
//     }

//     public save(
//         user: User,
//         onSuccess: (user: User) => void,
//         onError: (err: any) => void
//     ) {
//         this.userModel.save(user, onSuccess, onError)
//     }

//     public fetchByUsername(
//         username: string,
//         onSuccess: (user: User) => void,
//         onError: (err: any) => void
//     ) {
//         this.userModel.fetchByUsername(username, onSuccess, onError);
//     }
// }