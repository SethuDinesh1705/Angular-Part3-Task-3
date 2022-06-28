import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipe',
})
export class TestpipePipe implements PipeTransform {
  transform(value: number): string {
    if (value < 20) return 'Not eligible';
    else return 'Eligible';
  }
  verify(value: string): any {
    if (value == 'Indian') return 'Eligible';
    else return 'Not Eligible';
  }
}
