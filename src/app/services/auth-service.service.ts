import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private isLoggedIn: boolean = false;
  currentUser = {};
  constructor() {}
  get statusOfLoggining() {
    return this.isLoggedIn;
  }
  setStatusOfLoggining(status: boolean) {
    this.isLoggedIn = status;
  }
  get currentUserInfo() {
    return this.currentUser;
  }
  setCurrentUser(object: object) {
    this.currentUser = object;
  }
}
