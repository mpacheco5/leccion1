import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  rutas:any[] = []
  dato:string = '';

  constructor(private activatedRoute:ActivatedRoute, private _rutasService:RutasService, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.dato = params ['dato'];
      this.rutas = this._rutasService.buscarRuta(params ['dato']);
      console.log(this.rutas);
    });
  }
  
  verRuta(idx: number){
    console.log(idx);
    this.router.navigate(['/ruta', idx]);
  }

}