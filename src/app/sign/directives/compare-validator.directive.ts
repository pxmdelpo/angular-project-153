import { Directive, Input } from '@angular/core';
import { Validator, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms';


@Directive({
    selector: '[compare]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CompareValidatorDirective,
        multi: true
    }]
})
export class CompareValidatorDirective implements Validator {
    @Input("compare") compareName: string;
    
    validate(c: AbstractControl): ValidationErrors {
        const controlToCompare = c.root.get(this.compareName);

        if (c.value === null || c.value.length < 6) {
            return null;
        }

        const subscribe = controlToCompare.valueChanges.subscribe((value) => {
            c.updateValueAndValidity();
            subscribe.unsubscribe();
        })

        if (c.value === controlToCompare.value) {
            return null;
        }
        
        return {
            compare: true
        };
    }
}