import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordUppre'
})
export class WordUpprePipe implements PipeTransform {

  transform(value: string, wordParts: string[]): string {
    let result = value;

    wordParts.forEach( item => {
      result = result.replace(new RegExp('[А-Яа-я]*' + item + '[а-я]*', 'g'), (match: string) => {;
        return match.toUpperCase();
      })
    })
    return result;
  }

}
