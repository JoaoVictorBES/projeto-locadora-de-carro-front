import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../models/carro';


@Injectable({
  providedIn: 'root'
})
export class CarroService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/carro";

  constructor() {}

  findAll(): Observable<Carro[]>{
    return this.http.get<Carro[]>(this.API+ "/findAll");
  }

  delete(id: number): Observable<string>{
                                                            // quando o retorno for string eu uso essa regra p nao dar pau //
    return this.http.delete<string>(this.API+ "/delete" + id, {responseType: 'text' as 'json'});

  }
}
