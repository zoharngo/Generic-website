import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'previewText'
})
export class PreviewTextPipe implements PipeTransform {

  transform(str: string, maxSize: number): any {
    let more = str.length >= maxSize ? '...' : '';
    return `${str.slice(0, maxSize)}${more}`;
  }

}
