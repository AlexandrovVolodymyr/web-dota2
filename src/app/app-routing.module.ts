import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from "./features/core/guards/auth.guard";
import { UnauthorizedOnlyGuard } from "./features/core/guards/unauthorized-only.guard";

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/containers/home/home.component').then(c => c.HomeComponent),
    canActivate: [AuthGuard],
    // data: { state: 'home' }
  },
  {
    path: 'heroes',
    loadComponent: () => import('./features/heroes/containers/heroes/heroes.component').then(c => c.HeroesComponent),
    canActivate: [AuthGuard],
    // data: { state: 'heroes' }
  },
  {
    path: 'hero/:name',
    loadChildren: () => import('./features/hero-bio/hero-bio.module').then(m => m.HeroBioModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts',
    loadComponent: () => import('./features/contacts/containers/contacts/contacts.component').then(c => c.ContactsComponent),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
    canActivate: [UnauthorizedOnlyGuard]
  },
  { path: 'home', redirectTo: "/", pathMatch: "full" },
  { path: '**', redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
