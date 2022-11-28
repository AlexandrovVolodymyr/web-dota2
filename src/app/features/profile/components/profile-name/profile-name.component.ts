import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { combineLatest, Subject, takeUntil } from 'rxjs';

import { profileNameImports } from '../../profile.imports';

@Component({
  selector: 'app-profile-name',
  templateUrl: './profile-name.component.html',
  styleUrls: ['./profile-name.component.scss'],
  standalone: true,
  imports: profileNameImports,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileNameComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('controlRef', { read: ElementRef }) controlRef!: ElementRef;
  @ViewChild('hintRef', { read: ElementRef }) hintRef!: ElementRef;
  @Output() updateNameEvent = new EventEmitter<string>();
  @Input() displayNameRef!: ElementRef;
  @Input() value!: string;

  control!: FormControl<string>;

  private renderer = inject(Renderer2);
  private cdr = inject(ChangeDetectorRef);
  private unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    this.control = new FormControl<string>(this.value, {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(30)]
    });

    combineLatest([this.control.statusChanges, this.control.valueChanges])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(_ => this.cdr.detectChanges());
  }

  onBlur(): void {
    this.updateNameEvent.emit(this.control.value);
  }

  save(): void {
    this.updateNameEvent.emit(this.control.value);
  }

  cancel(): void {
    this.updateNameEvent.emit();
  }

  ngAfterViewInit(): void {
    const width = Math.round(this.displayNameRef.nativeElement.offsetWidth) + 8;

    this.renderer.setStyle(this.controlRef.nativeElement, 'width', `${width}px`);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
