import { Item } from './../tarefa';
import { Component, Input, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {


  constructor(private service: TarefaService) { }

  ngOnInit(): void {
  }

  item!: Item
  listaItens = [this.item]

  @Input() tarefa: Tarefa = {
    id: 0,
    titulo: 'Primeira Tarefa',
    itens: this.listaItens
  }

}
