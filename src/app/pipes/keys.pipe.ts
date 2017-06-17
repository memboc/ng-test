import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {

  transform(array: Array<any>) : any {
    let result = [];
    for (let key in array) if (array.hasOwnProperty(key)) {
      result.push({key: key, value: array[key]});
    }
    return result;
  }
}
