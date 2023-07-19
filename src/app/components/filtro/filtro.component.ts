import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Ruta, RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {

  filtro:string = '';
  rutas:Ruta[] = []

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params => {
      this.filtro = params ['tipo'];
      this.rutas = this._rutasServices.filtrarRutas(params['tipo']);
      console.log(this.rutas);
    });
  }

  constructor(private activatedRoute:ActivatedRoute,private _rutasServices:RutasService,private router: Router){
    
  }
  verRuta(idx: number){
    console.log(idx);
    this.router.navigate(['/ruta', idx]);
  }

  filtrarRutas(tipo:string) {
    this.router.navigate(['/filtro', tipo]);
  }
}
