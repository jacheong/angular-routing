import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { RouteGuardService } from '../services/route-guard.service';
import { RouteResolver } from '../services/route.resolver';
import { ChildAComponent } from './child-a/child-a.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user-list/user/user.component';
import { ApiResolver } from '../services/api.resolver';
import { IdResolver } from '../services/id.resolver';

const routes: Routes = [
    {
        path: '',
        component: ShellComponent,
        canActivate: [RouteGuardService],
        children: [
            {
                path: 'a',
                component: ChildAComponent,
                resolve: {
                    message: RouteResolver
                }
            },
            {
                path: 'users',
                component: UserListComponent,
                resolve: {
                    users: ApiResolver
                }
            },
            {
                path: 'users/:id',
                component: UserComponent,
                resolve: {
                    user: IdResolver
                }
            }
        ]
    }
];

export const shellRoutes = RouterModule.forChild(routes);