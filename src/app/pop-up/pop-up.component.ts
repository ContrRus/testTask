import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
})
export class PopUpComponent implements OnInit {
  client!: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dialogRef: MatDialog,
    private router: Router
  ) {
    this.client = data;
  }

  ngOnInit(): void {
    // this.dialogRef.closeAll()
  }
  goToClientPage() {
    this.router.navigate(['client'], {
      queryParams: {
        data: this.client,
      },
    });
    this.dialogRef.closeAll();
  }
  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
}
