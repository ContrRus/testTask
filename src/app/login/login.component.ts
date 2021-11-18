import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private auth: AuthServiceService) {}
  loginErros = '';

  loggedIn = this.auth.statusOfLoggining;
  registerdUsers = [
    {
      username: 'admin',
      password: '123',
    },
    {
      username: 'user1',
      password: '321',
    },
    {
      username: 'user2',
      password: '000',
    },
  ];
  ngOnInit(): void {}
  loginUser(event: any) {
    event.preventDefault();

    const { target } = event;
    console.log('target', target);

    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    console.log('username', username);
    console.log('password', password);
    for (let user of this.registerdUsers) {
      if (user.username === username && user.password === password) {
        // this.currentUser.username = username;
        this.auth.setStatusOfLoggining(true);
        this.auth.setCurrentUser({
          username,
        });
        this.router.navigate(['home']);
        break;
      } else {
        this.loginErros = 'Wrong Username or password';
      }
    }
  }
}
