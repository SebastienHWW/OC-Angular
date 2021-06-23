import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule} from '@angular/forms'
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { Observable } from 'rxjs';
import { AuthGuard } from './services/auth-gard.service';


const appRoutes: Routes = [
  {path: 'appareils', canActivate: [AuthGuard] , component:AppareilViewComponent},
  {path: 'appareils/:id', canActivate:[AuthGuard] , component: SingleAppareilComponent},
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
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
