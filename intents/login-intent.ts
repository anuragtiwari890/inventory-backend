// import {User} from "../entities/user";
// import {UserRepository} from "../repositories/user-repository";


// export class LoginIntent {

//     userRepository: UserRepository

//     constructor(
//         userRepository: UserRepository
//     ) {
//         this.userRepository = userRepository
//     }

//     public impl(
//         username: string,
//         password: string,
//         onSucces: (user: User) => void,
//         onError: (err: any) => void
//     ) {
//         this.userRepository.fetchByUsername(username, (user) => {
//             if (user.password == password) {
//                 onSucces(user)
//             }
//         }, onError);
//     }
// }