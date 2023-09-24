import { Component, Input, OnInit } from '@angular/core';
import { TarefaService } from '../../tarefa.service';
import { Item } from '../../tarefa';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private service: TarefaService) { }

  ngOnInit(): void {
  }

  @Input() item: Item = {
    id: 1,
    tarefa_id: 1,
    nome: 'Primeiro item',
    tempo: ''
  }

}
