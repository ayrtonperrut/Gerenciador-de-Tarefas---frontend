import { Component, Input, OnInit } from '@angular/core';
import { Item, Tarefa } from '../tarefa';
import { TarefaService } from '../tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemService } from '../itens/item.service';

@Component({
  selector: 'app-tarefa-detalhe',
  templateUrl: './tarefa-detalhe.component.html',
  styleUrls: ['./tarefa-detalhe.component.css']
})
export class TarefaDetalheComponent implements OnInit {

  isOpenModalUpdate = false
  tarefa!: Tarefa
  listaDeItens: any[] = []
  totalDeTempo: any

  constructor(
    private service: TarefaService,
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(parseInt(id!)).subscribe((tarefa) => {
      this.tarefa = tarefa
    })
    this.itemService.listarItens(parseInt(id!))
    .subscribe((itens) => {
      this.listaDeItens = itens
      this.getTotaldeTempo()
    })

  }

  voltar() {
    this.router.navigateByUrl('/listarTarefa', {skipLocationChange: true})
  }

  getTotaldeTempo() {
    var horas: number = 0
    var minutos: number = 0

    for (let i = 0; i < this.listaDeItens.length; i++) {
      let split = this.listaDeItens[i].tempo.split('h', 2)
      if (!split[0].includes('m')) {
        horas = horas + parseInt(split[0])

        if (split[1].includes('m')) {
          split[1].replace(' ', '')
          split[1].replace('m', '')
          minutos = minutos + parseInt(split[1])
        }
      } else {
        minutos = minutos + parseInt(split[0])
      }

      if (minutos > 59) {
        horas = horas + 1
        minutos = minutos - 60
      }
    }
    this.totalDeTempo = horas + 'h ' + minutos +'m'
  }
}

