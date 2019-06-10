import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  logoff() {
    this.authService.logOut();
  }

}
