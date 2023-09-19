import { Injectable } from '@angular/core';
import { Item } from '../tarefa';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly API = 'http://localhost:3000/item';


  constructor(private http: HttpClient) { }

  listarItens(tarefa_id: number): Observable<Item[]> {

    const url = `${this.API}?tarefa_id=${tarefa_id}`
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
}
