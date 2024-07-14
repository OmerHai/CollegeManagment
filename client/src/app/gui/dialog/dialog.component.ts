import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf, MatFormFieldModule, MatInputModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.data.formGroup.valid) {
      this.dialogRef.close(this.data.formGroup.value);
    }
  }
}
