import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false, // для обновления фильтра

})
export class FilterPipe implements PipeTransform {

  /**
   * Filter any array of object by param name
   *
   * @param array Search array
   * @param q Query string
   * @param param needle param
   * @returns Array
   */
  transform(array: Array<Object>, q: string, param: string): any {
    if (q === undefined) {
      return array;
    }

    return array.filter(
      (el) => el[param].toLowerCase().includes(q.toLowerCase())
      // (el) => new RegExp(q).test(el[param])
    );
  }
}
