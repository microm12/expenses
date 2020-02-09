import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
