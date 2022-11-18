import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from "../button/button.module";

import { FormActionsComponent } from './form-actions.component';

@NgModule({
  declarations: [
    FormActionsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    FormActionsComponent
  ]
})
export class FormActionsModule {
}
