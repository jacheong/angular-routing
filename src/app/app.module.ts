import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouteGuardService } from './services/route-guard.service';
import { AuthService } from './services/auth.service';
import { ApiResolver } from './services/api.resolver';
import { IdResolver } from './services/id.resolver';
import { UserService } from './services/user.service';
import { StoreModule } from '@ngrx/store';
import { RouteResolver } from './services/route.resolver';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RouteGuardService,
    AuthService,
    RouteResolver,
    ApiResolver,
    UserService,
    IdResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
