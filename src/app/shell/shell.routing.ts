import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { RouteGuardService } from '../services/route-guard.service';
import { ChildAComponent } from './child-a/child-a.component';

const routes: Routes = [
    {
        path: '',
        component: ShellComponent,
        canActivate: [RouteGuardService]
    },
    {
        path: 'a',
        component: ChildAComponent
    }
];

export const shellRoutes = RouterModule.forChild(routes);