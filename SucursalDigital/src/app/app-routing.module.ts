import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterComponent } from './components/master/master.component';
import { FormularioEjemploComponent } from './components/formulario-ejemplo/formulario-ejemplo.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { Page404Component } from './pages/page404/page404.component'; 
import { FormularioCalificarComponent } from './components/formulario-calificar/formulario-calificar.component';
import { LoginComponent } from './pages/login/login.component';


 const routes: Routes = [
     /* { path: 'Graficas', component:  GraficasComponent } , */
      /* { path: 'FormularioEjemplo', component:  FormularioEjemploComponent },  */
     /*  { path: 'Calificar', component:  FormularioCalificarComponent },     */
      { path: 'login', component:  LoginComponent },    
     {
      path: 'FormularioEjemplo',
      component: MasterComponent,
      children: [
        {
          outlet: 'master',
          path: '',
          component: FormularioEjemploComponent
        }
      ]
    },
    {
      path: 'Graficas',
      component: MasterComponent,
      children: [
        {
          outlet: 'master',
          path: '',
          component: GraficasComponent
        }
      ]
    },
    {
      path: 'Calificar',
      component: MasterComponent,
      children: [
        {
          outlet: 'master',
          path: '',
          component: FormularioCalificarComponent
        }
      ]
    },
    
     { path: '**', component:  Page404Component } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
