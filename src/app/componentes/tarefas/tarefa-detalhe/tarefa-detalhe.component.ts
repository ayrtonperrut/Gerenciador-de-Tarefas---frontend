
import { Component, Input, OnInit } from '@angular/core';
import { Item, Tarefa } from '../tarefa';
import { TarefaService } from '../tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarefa-detalhe',
  templateUrl: './tarefa-detalhe.component.html',
  styleUrls: ['./tarefa-detalhe.component.css']
})
export class TarefaDetalheComponent implements OnInit {

  @Input() isOpenModal = false
  tarefa!: Tarefa

  formulario!: FormGroup
  constructor(private service : TarefaService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder
            ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(parseInt(id!)).subscribe((tarefa) => {
      this.tarefa = tarefa
      this.formulario = this.formBuilder.group({
        itens: ['']
      })
    })
  }

  chamaModalSubtarefa() {
    this.isOpenModal = true
  }

  adicionarSubtarefa() {
    let elemento = document.getElementById('itens') as HTMLInputElement
    let item = elemento?.value
    let id = criaIdItem(this.tarefa)
    this.tarefa.itens.push({id: id, nome: item})
    this.service.editar(this.tarefa).subscribe(() => {

      this.router.navigate([`tarefa/tarefaDetalhe/:${this.tarefa.id}`])
      this.isOpenModal = false
    })
  }

  cancelar() {
   this.isOpenModal = false
  }

  editarSubtarefa(nome: String) {
    this.isOpenModal = true
    this.formulario = this.formBuilder.group({
      itens: [nome]
    })
  }

}
function criaIdItem(tarefa: Tarefa): number {
  return tarefa.itens.length + 1
}

