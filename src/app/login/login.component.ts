import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { State } from '../reducers';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.authenticate(this.user);
    this.user.username = '';
    this.user.password = '';
  }

}
