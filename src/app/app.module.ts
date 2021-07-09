import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { Observable } from 'rxjs';
import { AuthGuard } from './services/auth-gard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [
  {path: 'appareils', canActivate: [AuthGuard] , component:AppareilViewComponent},
  {path: 'appareils/:id', canActivate:[AuthGuard] , component: SingleAppareilComponent},
  {path: 'edit', canActivate:[AuthGuard], component: EditAppareilComponent},
  {path: 'userList', component: UserListComponent},
  {path: 'new-user', component: NewUserComponent},
  {path: 'auth', component:AuthComponent},
  {path: '', component: AppareilViewComponent},

// Permet de rediriger vers un page Error 404 not found
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: 'not-found'} // Si la page n'existe pas alors on redirige vers le component 404
]


@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService,
    UserListComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
