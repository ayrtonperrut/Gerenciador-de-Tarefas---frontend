import { Component, Input, OnInit } from '@angular/core';
import { Item, Tarefa } from '../tarefa';
import { TarefaService } from '../tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemService } from '../itens/item.service';
import { ItemComponent } from '../itens/item/item.component';
import { CriarItemComponent } from '../itens/criar-item/criar-item.component';

@Component({
  selector: 'app-tarefa-detalhe',
  templateUrl: './tarefa-detalhe.component.html',
  styleUrls: ['./tarefa-detalhe.component.css']
})
export class TarefaDetalheComponent implements OnInit {

  @Input() isOpenModal = false
  isOpenModalUpdate = false
  tarefa!: Tarefa
  listaDeItens: any[] = []
  formulario!: FormGroup

  constructor(private service: TarefaService,
              private route: ActivatedRoute,
              private router: Router,
              private itemService: ItemService,
              private formBuilder: FormBuilder
            ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(parseInt(id!)).subscribe((tarefa) => {
      this.tarefa = tarefa
    })
    this.itemService.listarItens(parseInt(id!))
    .subscribe((itens) => {
      this.listaDeItens = itens
    })
  }

  chamaModalSubtarefa() {
    this.isOpenModal = true
  }

  voltar() {
    this.router.navigateByUrl('/listarTarefa', {skipLocationChange: true})
  }
}

