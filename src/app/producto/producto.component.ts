import { Component, OnInit } from '@angular/core';
import {Producto} from './producto';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.styl']
})
export class ProductoComponent implements OnInit {
productos:Producto[]=[
  {id:1,nombre:"Huevos",precio:15,cantidad:4},
  {id:2,nombre:"Queso",precio:11,cantidad:4},
  {id:3,nombre:"Quion",precio:15,cantidad:5},
  {id:4,nombre:"Cebolla",precio:2,cantidad:8}

]


  constructor() { }

  ngOnInit(): void {
  }

}
