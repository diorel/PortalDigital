import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


// Importar rutas

import { MenuComponent } from './components/menu/menu.component'; 
import { HomeComponent } from './pages/home/home.component'; 
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { MasterComponent } from './components/master/master.component';
import { FormularioEjemploComponent } from './components/formulario-ejemplo/formulario-ejemplo.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { Page404Component } from './pages/page404/page404.component';
import { FormularioCalificarComponent } from './components/formulario-calificar/formulario-calificar.component';
import { LoginComponent } from './pages/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    BarraNavegacionComponent,
    MasterComponent,
    FormularioEjemploComponent,
    GraficasComponent,
    Page404Component,
    FormularioCalificarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    AngularFontAwesomeModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
