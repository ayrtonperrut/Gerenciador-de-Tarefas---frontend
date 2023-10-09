import { Injectable } from '@angular/core';
import { Item } from '../tarefa';
import { Observable, identity } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly API = 'http://localhost:8080/item';


  constructor(private http: HttpClient) { }

  listarItens(tarefa_id: number): Observable<Item[]> {
    const url = `${this.API}/${tarefa_id}/itens`
    return this.http.get<Item[]>(url)
  }

  getById(id: number): Observable<Item> {
    const url = `${this.API}/${id}`
    return this.http.get<Item>(url)
  }

  criar(item: Item): Observable<Item> {
    return this.http.post<Item>(this.API, item);
  }

  editar(item: Item): Observable<Item> {
    const url = `${this.API}/${item.id}`
    return this.http.put<Item>(url, item)
  }

  excluir(id: number): Observable<Item> {
    const url = `${this.API}/${id}`
    return this.http.delete<Item>(url)
  }

  isFormatoTempoValido(tempo: string): boolean {
    var isFormatoValido = false
    var quantidadeH = 0
    var quantidadeM = 0

    if (tempo.match(/(\d)\h/)) {
      let splitInputHoras = tempo.split('')
      for (let i = 0 ; i < splitInputHoras.length ; i++) {
        if (splitInputHoras[i] === 'h') {
          quantidadeH ++
        }
      }
    }

    if (tempo.match(/(\d)\m/)) {
      let splitInputMinutos = tempo.split('')
      for (let i = 0 ; i < splitInputMinutos.length ; i++) {
        if (splitInputMinutos[i] === 'm') {
          quantidadeM ++
        }
      }
      if (quantidadeH === 1) {
        isFormatoValido = true
      }
    }

    if ((quantidadeH === 1 && quantidadeM === 1)
      || (quantidadeH === 1 && quantidadeM === 0)
      || (quantidadeH === 0 && quantidadeM === 1 )) {

      isFormatoValido = true
    }
    return isFormatoValido
  }
}
