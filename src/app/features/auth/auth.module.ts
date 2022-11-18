import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { AuthRoutingModule } from "./auth-routing.module";
import { ButtonModule } from "../../shared/button/button.module";
import { FormHeaderModule } from "../../shared/form-header/form-header.module";
import { FormActionsModule } from "../../shared/form-actions/form-actions.module";

import { AuthComponent } from './containers/auth/auth.component';
import { SteamFormComponent } from './components/steam-form/steam-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

@NgModule({
  declarations: [
    AuthComponent,
    SteamFormComponent,
    LoginFormComponent,
    RegistrationFormComponent,
  ],
  exports: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    FormHeaderModule,
    FormActionsModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ]
})
export class AuthModule {
}
