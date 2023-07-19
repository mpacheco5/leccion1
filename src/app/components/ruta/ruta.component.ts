import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent {

  ruta:any={};

  constructor(private activatedRoute: ActivatedRoute, private _rutasService:RutasService){
    this.activatedRoute.params.subscribe(params =>{
      this.ruta=_rutasService.getRuta(params['id']);
      console.log(this.ruta);
    })
  }

}
