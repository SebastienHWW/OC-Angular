import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/User.model';

import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[] = [];
  userSubscription: Subscription;

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    // userSubscription permet d'alimenter l'Array users à chaque fois que UserService évolue
    this.userSubscription = this.UserService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users; // On alimente l'Array local users avec celui de UserService qui est partagé entre tous les components
      }
    )
    this.UserService.emitUsers();
  }


  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
