import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../tarefa';

@Component({
  selector: 'app-excluir-item',
  templateUrl: './excluir-item.component.html',
  styleUrls: ['./excluir-item.component.css']
})
export class ExcluirItemComponent implements OnInit {

  item: Item = {
    tarefaId: 0,
    id: 0,
    nome: '',
    tempo: ''

  }

  constructor(private service: ItemService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(parseInt(id!)).subscribe((item) => {
      this.item = item
    })
  }

  excluirItem() {
    if (this.item.id) {
      this.service.excluir(this.item.id).subscribe(() =>{
        this.router.navigate(['/tarefa/tarefaDetalhe/', this.item.tarefaId])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/tarefa/tarefaDetalhe/', this.item.tarefaId])
  }

}
