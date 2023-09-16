import { Component, OnInit } from '@angular/core';
import { Item, Tarefa } from '../tarefa';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-excluir-tarefa',
  templateUrl: './excluir-tarefa.component.html',
  styleUrls: ['./excluir-tarefa.component.css']
})
export class ExcluirTarefaComponent implements OnInit {

  item!: Item
  listaItens = [this.item]
  tarefa: Tarefa = {
    id: 0,
    titulo: '',
    itens: this.listaItens
  }

  constructor(private service: TarefaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(parseInt(id!)).subscribe((tarefa) => {
      this.tarefa = tarefa
    })
  }

  excluirTarefa() {
    if (this.tarefa.id) {
      this.service.excluir(this.tarefa.id).subscribe(() =>{
        this.router.navigate(['/listarTarefa'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarTarefa'])
  }
}
