import { ThemePalette } from "@angular/material/core";

export interface FormActions {
  resetBtnText: string;
  actionBtnText: string;
  color: ThemePalette;
  switcherText?: string;
  switcherLink?: string;
  switcher: boolean;
}
