import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { HeaderComponent } from './layout/header/header.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { UserComponent } from '../../shared/user/user.component';

import { NumberRoundPipe } from './pipes/number-round.pipe';
import { ImgSplitPipe } from './pipes/img-split.pipe';
import { TwitchViewersPipe } from './pipes/twitch-viewers.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    NumberRoundPipe,
    ImgSplitPipe,
    TwitchViewersPipe
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    UserComponent
  ],
  exports: [
    HeaderComponent,
    NumberRoundPipe,
    ImgSplitPipe,
    TwitchViewersPipe
  ]
})
export class CoreModule {
}
