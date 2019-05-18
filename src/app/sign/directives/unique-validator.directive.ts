import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../shared/services/auth.service';

@Directive({
    selector: '[uniqueEmail]',
    providers: [{
        provide: NG_ASYNC_VALIDATORS,
        useExisting: UniqueValidatorDirective,
        multi: true
    }]
})
export class UniqueValidatorDirective implements AsyncValidator {

    constructor(private authService: AuthService) {}

    validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return this.authService.getUserByEmail(c.value).pipe(
            map(users => {
                return users && users.length > 0 ? { uniqueEmail: true} : null;
            })
        );
    }
}
