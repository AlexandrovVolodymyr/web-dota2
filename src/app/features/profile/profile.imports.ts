import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { ProfileNameComponent } from './components/profile-name/profile-name.component';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { LoaderComponent } from '../../shared/loader/loader.component';

export const profileImports = [CommonModule, MatIconModule, MatDialogModule, ReactiveFormsModule, DialogComponent, ProfileNameComponent, LoaderComponent];
export const profileNameImports = [CommonModule, ReactiveFormsModule, MatIconModule];
