import { ReactiveFormsModule } from "@angular/forms";

import { FormHeaderModule } from "../../../../shared/form-header/form-header.module";
import { FormActionsModule } from "../../../../shared/form-actions/form-actions.module";

export const contactsFormImports = [ReactiveFormsModule, FormHeaderModule, FormActionsModule];
