import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twitchViewers'
})
export class TwitchViewersPipe implements PipeTransform {

  transform(value: number): string {
    // TODO: 1000 / 100 / ...
    return `${value} viewers`;
  }

}
