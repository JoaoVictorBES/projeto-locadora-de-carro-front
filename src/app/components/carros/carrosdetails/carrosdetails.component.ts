import { CarroService } from './../../../services/carro.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Subscriber } from 'rxjs';
import { Carro } from 'src/app/models/carro';

@Component({
  selector: 'app-carrosdetails',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MdbFormsModule, FormsModule, RouterLink, HttpClientModule],
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss'],

})
export class CarrosdetailsComponent  {

  @Input ("carro") carro: Carro = new Carro(0, "");
  @Output('retorno') retorno: EventEmitter<Carro> = new EventEmitter<Carro>();
  router = inject(ActivatedRoute);
  router2 = inject(Router);

  CarroService = inject(CarroService);

  constructor(){
    let id = this.router.snapshot.params['id'];
    if (id > 0){
      this.findById(id);
    }

  }

  findById(id: number){

    this.CarroService.findById(id).subscribe({
      next: retorno => {
        this.carro = retorno;
      },
      error: erro => {
        alert('Ocorreu algum erro');
      }
    })

  }

  save(){
    if (this.carro.id > 0){
      this.CarroService.update(this.carro, this.carro.id).subscribe({
        next: mensagem => {

          alert ('Editado com sucesso!');
          this.router2.navigate(['admin/carros'], { state: { carroEditado: this.carro} });
          this.retorno.emit(this.carro);

        },
        error: erro => {

          alert('Ocorreu algum erro')

        }
      })


    }else{

      this.CarroService.save(this.carro).subscribe({
        next: retorno => {
          this.router2.navigate(['admin/carros'], { state: { carroEditado: this.carro} });
          this.retorno.emit(this.carro);
          alert ('Salvo com sucesso!');
        },
        error: erro => {
          alert('Ocorreu algum erro')
        }
      })


    }

    
  }

}
