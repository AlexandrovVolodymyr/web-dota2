import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";

import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule,
    MatButtonModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule {
}
