import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { heroAbilitiesImports } from '../../hero-bio.imports';

@Component({
  selector: 'app-hero-abilities',
  templateUrl: './hero-abilities.component.html',
  styleUrls: ['./hero-abilities.component.scss'],
  standalone: true,
  imports: [...heroAbilitiesImports],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroAbilitiesComponent implements AfterViewInit, AfterContentChecked {
  @ViewChild('abilitiesList', { static: true }) abilitiesList!: ElementRef;
  @ViewChildren('item') item!: QueryList<ElementRef>;
  @Input() abilities: any;
  WIDTH = 90;
  count = NaN;

  private cdr = inject(ChangeDetectorRef);

  ngAfterViewInit(): void {
    this.count = this.item.toArray().length;
  }

  ngAfterContentChecked() {
    setTimeout(() => {
      this.count = this.abilitiesList.nativeElement.querySelectorAll('.abilities__item')?.length;
      this.cdr.detectChanges();
    });
  }

  moveRight(abilitiesList: HTMLUListElement): void {
    abilitiesList.scrollLeft += (this.WIDTH + 10);
  }

  moveLeft(abilitiesList: HTMLUListElement): void {
    abilitiesList.scrollLeft -= (this.WIDTH + 10);
  }
}
