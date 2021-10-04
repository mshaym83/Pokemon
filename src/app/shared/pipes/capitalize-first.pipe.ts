import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'capitalizeFirst'
})
export class CapitalizeFirstLetter implements PipeTransform {
    transform(word: string) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}