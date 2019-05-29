import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortText'
})
export class ShorTextPipe implements PipeTransform {
    transform(value: string, len: number = 50) {
        return value.length > len ? value.slice(0, len) + '...' : value;
    }
}
