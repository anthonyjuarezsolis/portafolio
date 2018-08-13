import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescription } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

producto: ProductoDescription;
id: string;


anios: number = new Date().getFullYear();
month: number = new Date().getMonth();
day: number = new Date().getDate();
  constructor( private route: ActivatedRoute,
               public productosService: ProductosService ) { }

  ngOnInit() {

  this.route.params
  .subscribe( parametros => {

   // console.log(parametros['id']);
    this.productosService.getProducto(parametros['id'])
    .subscribe( (producto: ProductoDescription) => {
      this.id = parametros ['id'];
      this.producto = producto;
    });
  });

  }

}
