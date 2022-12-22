import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ProfileNameComponent } from './components/profile-name/profile-name.component';
import { LoaderComponent } from '../../shared/loader/loader.component';

export const profileImports = [CommonModule, MatIconModule, MatDialogModule, ReactiveFormsModule, MatSnackBarModule, ProfileNameComponent, LoaderComponent];
export const profileNameImports = [CommonModule, ReactiveFormsModule, MatIconModule];
export const dialogImports = [NgForOf, NgIf, MatButtonModule];
