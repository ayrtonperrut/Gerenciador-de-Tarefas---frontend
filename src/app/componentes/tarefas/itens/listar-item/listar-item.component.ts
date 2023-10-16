import { ItemService } from './../item.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-item',
  templateUrl: './listar-item.component.html',
  styleUrls: ['./listar-item.component.css']
})
export class ListarItemComponent implements OnInit, OnDestroy {

  listaDeItens: any[] = []

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.itemService.listarItens(parseInt(id!))
    .subscribe((itens) => {
      this.listaDeItens = itens
    })
  }

  ngOnDestroy(): void {

  }

}
