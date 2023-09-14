import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  listaDeTarefas: Tarefa[] = [];


  constructor(private service: TarefaService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listadeTarefas) => {
      this.listaDeTarefas = listadeTarefas;
    })
  }

}
