import { Component, OnInit } from '@angular/core';
import {Usuario} from './usuario';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.styl']
})
export class UsuariosComponent implements OnInit {
usuarios:Usuario[] = [
  {id:1,nomuser:"jonas",clave : "123"},
  {id:2,nomuser:"ana",clave:"456"},
  {id:3,nomuser:"kevin",clave:"321"},
  {id:4,nomuser:"alva",clave:"156"}
    
]
  constructor() { }

  ngOnInit(): void {
  }

}
