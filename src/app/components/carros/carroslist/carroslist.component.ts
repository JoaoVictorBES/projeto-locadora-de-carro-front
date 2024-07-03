import { CarroService } from './../../../services/carro.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Carro } from 'src/app/models/carro';
import { CarrosdetailsComponent } from '../carrosdetails/carrosdetails.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-carroslist',
    standalone: true,
    templateUrl: './carroslist.component.html',
    styleUrls: ['./carroslist.component.scss'],
    imports: [CommonModule, CarroslistComponent, CarrosdetailsComponent, RouterLink, RouterOutlet, HttpClientModule]
})
export class CarroslistComponent implements OnInit{

  // Declarações

  lista: Carro[] = [];
  carroEdit: Carro = new Carro(0, "");

  // Elementos da modal
  modalService = inject(MdbModalService); //Para conseguir abrir a modal
  @ViewChild('modalCarroDetalhe') modalCarroDetalhe!: TemplateRef<any>; // referencia do template da model no html
  modalRef!: MdbModalRef<any>;

  //carroService = inject(CarroService);


  constructor(private carroService: CarroService){

    let carroNovo = history.state.carroNovo;
    let carroEditado = history.state.carroEditado

    if(carroNovo){
      carroNovo.id = 555;
      this.lista.push(carroNovo);
    }

    if (carroEditado != null){
      let indice = this.lista.findIndex(x => {return x.id == carroEditado.id});
      this.lista[indice] = carroEditado;
    }

  }

  ngOnInit() {
    alert('iniciei')
    this.findAll()
  }


    findAll(){
      this.carroService.findAll().subscribe({
        next: lista => { //quando o back retornar oque se espera
          this.lista = lista;
        },
        error: erro =>{ //quando ocorrer qualquer erro
          alert('Ocorreu algum erro')
        }
      });

    }

    delete(Carro: Carro){
      if (confirm("Tem certeza que deseja deletar este registro?") ){

        this.carroService.delete(Carro.id).subscribe({
          next: mensagem => { //quando o back retornar oque se espera
            alert("Deletado com sucesso!");

            this.findAll();
          },
          error: erro =>{ //quando ocorrer qualquer erro
            alert('Ocorreu algum erro')
          }
        });

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

      this.findAll();
      this.modalRef.close();

    }
}


