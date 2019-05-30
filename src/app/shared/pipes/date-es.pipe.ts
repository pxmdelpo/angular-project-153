import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateES'
})
export class DateESPipe implements PipeTransform {
    readonly months = ['Enero', 'Feb', 'Marzo', 'Abril', 'Mayo'];

    transform(text, sepMonth = '', sepYear = '') {
        const date = new Date(text);

        const fullDate = [
            date.getDate(),
            sepMonth,
            this.months[date.getMonth()],
            sepYear,
            date.getFullYear()
        ]
        return fullDate.join(' ');
    }
}