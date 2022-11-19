import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { FormHeaderComponent } from './form-header.component';

@NgModule({
  declarations: [
    FormHeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    FormHeaderComponent
  ]
})
export class FormHeaderModule {
}
