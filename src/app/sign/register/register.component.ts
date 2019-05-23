import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    if (form.confirmPassword) {
      delete form.confirmPassword;
    }
    
    this.userService.createUser(form).subscribe((user: User) => {
      if (user) {
        this.router.navigate(['/sign/login']);
      }
    });
  }

}
