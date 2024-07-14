import { FormGroup } from "@angular/forms";
import { FormControl } from "./formControl";

export interface DialogData {
    title: string;
    formGroup: FormGroup;
    controls: FormControl[];
}