import { Injectable } from "@angular/core";

export interface Tarefa {

  id?: number;
  titulo: string;
  itens: Item[];
}


export interface Item {

  id?: number;
  nome: string;
}
