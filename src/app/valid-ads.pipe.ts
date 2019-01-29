import { Pipe, PipeTransform } from '@angular/core';
import { Advertisment } from './advertisment';

@Pipe({
  name: 'validAds'
})
export class ValidAdsPipe implements PipeTransform {

  transform(objects: Advertisment[], ): Advertisment[] {
    if(objects) {
        return objects.filter(object => {
            return object.date >= (Date.now() - 604800000);
        });
    } else {
      return [];
    }
}

}
