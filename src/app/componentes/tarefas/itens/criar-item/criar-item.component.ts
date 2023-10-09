import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-item',
  templateUrl: './criar-item.component.html',
  styleUrls: ['./criar-item.component.css']
})
export class CriarItemComponent implements OnInit {

  formulario!: FormGroup
  tarefa_id!: number
  isOpenModal = false

  constructor(private service: ItemService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('tarefaId')
    this.tarefa_id = parseInt(id!)
    this.formulario = this.formBuilder.group({
      tarefa_id: [this.tarefa_id],
      nome: [''],
      tempo:['']
    })
  }

  criarItem() {
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate([`tarefa/tarefaDetalhe/${this.tarefa_id}`])
    })
  }

  cancelarItem() {
    this.router.navigate([`tarefa/tarefaDetalhe/${this.tarefa_id}`])
  }

  habilitarBotao(): string {
    var botao
    if (this.formulario.valid) {
      botao = 'botao'
    } else {
      botao = 'botao__desabilitado'
    }

    return botao
  }
}
