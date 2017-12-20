import { Pipe, PipeTransform } from '@angular/core';
import { CHECKBOX_VALUE_ACCESSOR } from '@angular/forms/src/directives/checkbox_value_accessor';

@Pipe({
    name: 'capitalize'
})

export class CapitalizeFirstPipe implements PipeTransform {

    /* my solution
    transform(value: string, args?: any) {
        if (!value)
            return null;

        let splitted = value.trim().split(' ');
        let finalText = '';

        for (let i = 0; i < splitted.length; i++) {

            if (i == 0)
                finalText += splitted[0].charAt(0).toUpperCase() + splitted[0].slice(1).toLowerCase() + ' ';

            if (i > 0) {
                if (splitted[i].toLowerCase() == 'the' || splitted[i].toLowerCase() == 'of') {
                    finalText += splitted[i].toLowerCase() + ' ';
                }
                else {
                    finalText += splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1).toLowerCase() + ' ';
                }
            }

        }

        return finalText;
    }
    */

    transform(value:string){
        if(!value) return null;

        let words = value.split(' ');

        for(let i = 0; i < words.length; i++){
            if(i!=0 && this.isPreposition(words[i]))
                words[i] = words[i].toLowerCase();
            else
                words[i]= this.toTitleCase(words[i]);
        }

        return words.join(' ');

    }

    private toTitleCase(word:string):string{
        return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
    }

    private isPreposition(word:string):boolean{

        let prepositions = [
            'the',
            'of'
        ]

        return prepositions.includes(word.toLowerCase());
    }
}