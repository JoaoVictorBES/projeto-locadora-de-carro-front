import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Carro } from 'src/app/models/carro';

@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss'],
})
export class CarroslistComponent  {

  lista: Carro[] = [];

  constructor(){

    this.lista.push(new Carro(1, "Corsa"));
    this.lista.push(new Carro(2, 'Fusca'));
    this.lista.push(new Carro(3, 'Gol'));

    let carroNovo = history.state.carroNovo;
    let carroEditado = history.state.carroEditado

    if(carroNovo){
      carroNovo.id = 555;
      this.lista.push(carroNovo);
    }

    if (carroEditado){
      let indice = this.lista.findIndex(x => {return x.id == carroEditado.id});
      this.lista[indice] = carroEditado;
    }

  }

  deleteById(carro: Carro){
    if (confirm("Tem certeza que deseja deletar este registro?") ){
    let indice = this.lista.findIndex(x => {return x.id == carro.id});
    this.lista.splice(indice, 1);
  }
  }


}
