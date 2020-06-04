import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modelosPipe'
})
export class ModelosPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let fixedValue: string;
    let cant: number = value.length;
    if(cant == 1 || cant == 2){
      return value;
    }else{
      fixedValue = `[${value[0]}-${value[cant-1]}]`;
      return fixedValue;
    }
  }

}
