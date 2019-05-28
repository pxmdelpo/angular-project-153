import { Directive } from "@angular/core";
import { AsyncValidator, AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Directive({
    selector: '[unique]',
    providers: [{
        provide: NG_ASYNC_VALIDATORS,
        useExisting: UniqueDirective,
        multi: true
    }]
})
export class UniqueDirective implements AsyncValidator {

    constructor(private userService: UserService) {}

    validate(c: AbstractControl): Observable<ValidationErrors | null> {
        console.log('correo >', c.value);

        return this.userService.getUsers().pipe(
            map((data: any) => {
                const user = data.filter(user => user.email === c.value);

                return user.length ? { unique: true } : null;
            })
        );
    }
}