import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";

import { UserModule } from "../../shared/user/user.module";
import { ProfileModule } from "../profile/profile.module";

import { HeaderComponent } from './layout/header/header.component';
import { NavigationComponent } from './layout/navigation/navigation.component';

import { NumberRoundPipe } from './pipes/number-round.pipe';
import { ImgSplit } from './pipes/imgSplit';

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    NumberRoundPipe,
    ImgSplit
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    UserModule,
    ProfileModule
  ],
  exports: [
    HeaderComponent,
    NumberRoundPipe,
    ImgSplit
  ]
})
export class CoreModule {
}
