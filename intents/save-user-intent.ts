// import {User, UserFactory} from "../entities/user";
// import {UserRepository} from "../repositories/user-repository";


// export class SaveUserIntent {

//     userRepository: UserRepository

//     constructor(
//         userRepository: UserRepository
//     ) {
//         this.userRepository = userRepository
//     }

//     public impl(
//         userObj: any,
//         onSuccess: (user: User) => void,
//         onError: (err: any) => void
//     ) {
//         try {
//             let user = new UserFactory().sanitize(userObj);
//             this.userRepository.save(user, onSuccess, onError);
//         } catch (e) {
//             onError("error in creating user")
//         }
//     }
// }