import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";

import { ProfileComponent } from './containers/profile/profile.component';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule {
}
