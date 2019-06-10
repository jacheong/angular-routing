import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { shellRoutes } from './shell.routing'
import { ShellComponent } from './shell.component';
import { RouteGuardService } from '../services/route-guard.service';
import { ChildAComponent } from './child-a/child-a.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user-list/user/user.component';

@NgModule({
  declarations: [
    ShellComponent,
    ChildAComponent,
    UserListComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    shellRoutes
  ],
  exports: [
    ShellComponent
  ],
  providers: [
    RouteGuardService
  ],
})
export class ShellModule { }
