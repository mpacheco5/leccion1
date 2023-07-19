import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RutasService, Ruta } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent {
  rutas: Ruta[]=[];

  ngOnInit(): void{
    this.rutas= this._rutasServices.getRutas();
    console.log(this.rutas);
  }

  constructor(private _rutasServices:RutasService,private router: Router){
    
  }
  verRuta(idx: number){
    console.log(idx);
    this.router.navigate(['/ruta', idx]);
  }

  filtrarRutas(tipo:string) {
    this.router.navigate(['/filtro', tipo]);
  }
}
