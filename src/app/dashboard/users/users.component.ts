import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Observable<User[]>;
  allUsers: User[];
  filter = new FormControl('');

  constructor(private router: Router,
              private userService: UserService ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => {
        this.allUsers = users;
        this.users = this.filter.valueChanges.pipe(
            startWith(''),
            map(text => this.search(text))
        );
    });
  }

  onRemoveUser(user: User) {
    this.userService.deleteUser(user.id).subscribe(res => {
        this.allUsers.splice(this.allUsers.indexOf(user), 1);
        this.users = of(this.allUsers);
    });
  }

  onUpdateUser(user: User) {
      this.router.navigate(['/dashboard/users/', user.id]);
  }

  search(text: string) {
      const term = text.toLowerCase();

      return this.allUsers.filter(user => {
          return user.name.toLowerCase().includes(term)
              || user.lastname.toLowerCase().includes(term)
              || user.email.toLowerCase().includes(term);
      });
  }

}
