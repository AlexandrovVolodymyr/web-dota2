import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeroBioComponent } from './containers/hero-bio/hero-bio.component';

const routes: Routes = [
  {
    path: '',
    component: HeroBioComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HeroBioRoutingModule {
}
