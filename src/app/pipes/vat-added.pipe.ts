import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform { 

  transform(value: number, rate: number): number { //ilk parametre değiştirmek istenen veri,ikinci parametre pipeda kullanılan parametre,dönüş tipi number
    return value + (value*rate/100);
  }

}
