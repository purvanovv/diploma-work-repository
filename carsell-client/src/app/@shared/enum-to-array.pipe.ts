import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray',
})
export class EnumToArrayPipe implements PipeTransform {
  transform(data: Object) {
    if (data != undefined) {
      return Object.keys(data);
    }
  }
}
