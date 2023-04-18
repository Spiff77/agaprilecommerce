import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bankAccount'
})
export class BankAccountPipe implements PipeTransform {

  transform(value: string | undefined, length?: number): string {
    if(!value || (length && value.length != length)){
      return '[INVALID ACCOUNT NUMBER]'
    }
    return value.substring(0,4).padEnd(value.length, '*');
  }

}
