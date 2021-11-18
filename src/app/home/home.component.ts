import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  currentUser: any;
  currentUserName: string = '';
  constructor(private auth: AuthServiceService, private dialogRef: MatDialog) {}
  @ViewChild('client1') client1!: ElementRef;
  @ViewChild('client2') client2!: ElementRef;
  ngOnInit(): void {
    this.currentUser = this.auth.currentUserInfo;
    this.currentUserName = this.currentUser.username;
    console.log('current user is', this.currentUser);
  }

  handleClick(event: any) {
    let clientInfo = event.target.innerText.trim();
    this.dialogRef.open(PopUpComponent, {
      data: clientInfo,
    });
  }
}
