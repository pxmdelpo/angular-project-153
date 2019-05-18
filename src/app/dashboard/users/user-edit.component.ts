import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {
    model: User;
    loaded: boolean;

    constructor(private location: Location,
                private route: ActivatedRoute,
                private userService: UserService) {}

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');

        this.userService.getUserById(id).subscribe((user: User) => {
            this.loaded = true;
            this.model = user;
        });
    }

    onCancel() {
        this.location.back();
    }

    onSave() {
        this.model.updated_at = Date.now();
        this.userService.updateUser(this.model).subscribe((user: User) => {
            this.onCancel();
        });
    }
}
