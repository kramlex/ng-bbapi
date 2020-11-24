import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../models/character';
import { Status } from '../models/status';

@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform{
  transform(list: Character[], status: Status): any {
    if (!list) {
      return null;
    }
    if (!status || status === 'not select') {
      return list;
    }
    return list.filter((item: Character): boolean => {
      return item.status.toLocaleLowerCase() === status;
    });
  }
}
