import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductoComponent } from './producto/producto.component';

import {RouterModule, Routes} from '@angular/router';

const rutas: Routes = [

  {
    path: 'usuarios',
    component : UsuariosComponent


  },
  {
    path: 'producto',
    component : ProductoComponent


  }



]




@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
