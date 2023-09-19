import { Injectable } from "@angular/core";

export interface Tarefa {

  id?: number;
  titulo: string;
}

export interface Item {

  id?: number;
  tarefa_id?: number;
  nome: string;
  tempo: string;
}
