import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Carro } from 'src/app/models/carro';
import { CarrosdetailsComponent } from '../carrosdetails/carrosdetails.component';

@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, MdbModalModule, CarrosdetailsComponent],
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss'],
})
export class CarroslistComponent  {

  lista: Carro[] = [];
  carroEdit: Carro = new Carro(0, "");

  // Elementos da modal //
  modalService = inject(MdbModalService); //Para conseguir abrir a modal
  @ViewChild('modalCarroDetalhe') modalCarroDetalhe!: TemplateRef<any>; // referencia do template da model no html
  modalRef!: MdbModalRef<any>;

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

  new (){
    this.carroEdit = new Carro(0, "");
    this.modalRef = this.modalService.open(this.modalCarroDetalhe);
  }

  edit(carro: Carro){
    this.carroEdit = Object.assign({}, carro);
    this.modalRef = this.modalService.open(this.modalCarroDetalhe);

  }

  retornoDetalhe(carro: Carro){
    if (carro.id > 0){
      let indice = this.lista.findIndex(x => { return x.id == carro.id});
      this.lista[indice] = carro;
    }else{
      carro.id = 55;
      this.lista.push(carro);
    }

    this.modalRef.close();
  }
}
