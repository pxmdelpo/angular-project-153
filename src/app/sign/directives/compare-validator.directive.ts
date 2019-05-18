import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Input, Directive } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[compare]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CompareValidatorDirective,
        multi: true
    }]
})
export class CompareValidatorDirective implements Validator {
    @Input('compare') controlNameToCompare: string;

    validate(c: AbstractControl): ValidationErrors | null {
        const controlToCompare = c.root.get(this.controlNameToCompare);

        if (c.value === null || c.value.length < 6) {
            return null;
        }

        if (controlToCompare) {
            const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
                c.updateValueAndValidity();
                subscription.unsubscribe();
            });
        }

        return controlToCompare && controlToCompare.value !== c.value ? { compare: true } : null;
    }
}
