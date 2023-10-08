import { Time } from "@angular/common";

export interface Tarefa {

  id?: number;
  titulo: string;
}

export interface Item {

  id?: number;
  tarefaId?: number;
  nome: string;
  tempo: string;
}
