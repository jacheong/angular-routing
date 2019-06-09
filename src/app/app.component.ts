import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-routing';
  loading = false;

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe( routerEvent => {
      if (routerEvent instanceof NavigationStart) {
        this.loading = true;
      } 
      
      if (
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationError
      ) {
        this.loading = false;
      }
    } );
  }
}
