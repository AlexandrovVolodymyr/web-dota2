import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";

import { UserModule } from "../../shared/user/user.module";
import { ProfileModule } from "../profile/profile.module";

import { HeaderComponent } from './layout/header/header.component';
import { NavigationComponent } from './layout/navigation/navigation.component';

import { NumberRoundPipe } from './pipes/number-round.pipe';
import { ImgSplitPipe } from './pipes/img-split.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    NumberRoundPipe,
    ImgSplitPipe
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
    ImgSplitPipe
  ]
})
export class CoreModule {
}
