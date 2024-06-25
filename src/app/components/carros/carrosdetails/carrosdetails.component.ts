import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Subscriber } from 'rxjs';
import { Carro } from 'src/app/models/carro';

@Component({
  selector: 'app-carrosdetails',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MdbFormsModule, FormsModule, RouterLink],
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss'],

})
export class CarrosdetailsComponent  {

  @Input ("carro") carro: Carro = new Carro(0, "");
  @Output('retorno') retorno: EventEmitter<Carro> = new EventEmitter<Carro>();
  router = inject(ActivatedRoute);
  router2 = inject(Router);

  constructor(){
    let id = this.router.snapshot.params['id'];
    if (id > 0){
      this.findById(id);
    }

  }

  findById(id: number){
    // busca no back-end //
    let carroRetornado: Carro = new Carro(id, "gol");
    this.carro = carroRetornado;
  }

  save(){
    if (this.carro.id > 0){
      alert ('Editado com sucesso!');
      this.router2.navigate(['admin/carros'], { state: { carroEditado: this.carro} });
    }else{
    alert ('Salvo com sucesso!');
    this.router2.navigate(['admin/carros'], { state: { carroNovo: this.carro} });
    }

    this.retorno.emit(this.carro);
  }

}
