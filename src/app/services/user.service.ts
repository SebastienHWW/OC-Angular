import {User} from '../models/User.model';
import {Subject} from 'rxjs';

export class UserService {
    private users: User[] = [
        new User('Jojo', 'Jotaro', 'Jojo@Jojo.com', 'Jus d\'orange', ['Frapper', 'Taper'])
    ];

    userSubject = new Subject<User[]>()



emitUsers(){
    this.userSubject.next(this.users.slice());
}


addUser(p_user: User){
    this.users.push(p_user);
    this.emitUsers();
}

}