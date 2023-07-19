import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  private rutas:Ruta[]=[
    {
      ciuorigen: "Huaquillas",
      ciudestino: "Machala",
      img: "assets/img/cifa.jpg",
      precio: "$2.50",
      descripcion: "Una ruta que va desde huaquillas a machala, en 1 h",
      tipo: "Interno"
    },
    {
      ciuorigen: "Huaquillas",
      ciudestino: "Guayaquil",
      img: "assets/img/cifa.jpg",
      precio: "$16.00",
      descripcion: "Una ruta que va desde huaquillas a guayaquil, en 6 h",
      tipo: "Interno"
    },
    {
      ciuorigen: "Huaquillas",
      ciudestino: "Cuenca",
      img: "assets/img/cifa.jpg",
      precio: "$12.00",
      descripcion: "Una ruta que va desde huaquillas a cuenca, en 4 h",
      tipo: "Interno"
    },
    {
      ciuorigen: "Huaquillas",
      ciudestino: "Bogota",
      img: "assets/img/cifa.jpg",
      precio: "$60.00",
      descripcion: "Una ruta que va desde huaquillas a bogota, en 24 h",
      tipo: "Externo"
    }
  ];

  constructor() { 
    console.log("Servicio listo para usar...");
  }

  getRutas(){
    return this.rutas;
  }

  getRuta(idx:number):Ruta{
    return this.rutas[idx];
  }

  buscarRuta(dato:string) : Ruta[] {
    let rutasArr:Ruta[] = [];
    dato = dato.toLocaleLowerCase();
    for(let i = 0; i < this.rutas.length; i++) {
      let ruta = this.rutas[i];
      let nombre = ruta.ciuorigen.toLocaleLowerCase();
      let nombre2 = ruta.ciudestino.toLocaleLowerCase();
      if(nombre.indexOf(dato) >= 0 || nombre2.indexOf(dato) >= 0) {
        ruta.idx = i;
        rutasArr.push(ruta);
      }
    }
    return rutasArr;
  }

  filtrarRutas(tipo: string) : Ruta[]{
    let rutasArr:Ruta[] = [];
      for(let i = 0; i < this.rutas.length; i++) {
      let ruta = this.rutas[i];
      let tipo2 = ruta.tipo.toLocaleLowerCase();
      if(tipo == 'todos') {
        return this.rutas;
      }
      if(tipo2 == tipo) {
        rutasArr.push(ruta);
      }
    }
    return rutasArr;
  }

}

export interface Ruta{
  ciuorigen: string;
  ciudestino: string;
  img: string;
  precio: string;
  descripcion: string;
  tipo: string;
  idx?: number;
}

