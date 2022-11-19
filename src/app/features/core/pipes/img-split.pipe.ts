import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgSplit'
})
export class ImgSplitPipe implements PipeTransform {

  transform(source: string): string {
    const newSource: string[] = source.split('-{width}x{height}')
    return newSource[0] + newSource[1];
  }

}
