import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-item',
  templateUrl: './editar-item.component.html',
  styleUrls: ['./editar-item.component.css']
})
export class EditarItemComponent implements OnInit {

  formulario!: FormGroup
  tarefaId!: any

  constructor(private service: ItemService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(parseInt(id!)).subscribe((item) => {
      this.tarefaId = item.tarefaId
      this.formulario = this.formBuilder.group({
        tarefaId: [item.tarefaId],
        id: [item.id],
        nome: [item.nome],
        tempo: [item.tempo]
      })
    })
  }

  editarItem() {
    this.service.editar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/tarefa/tarefaDetalhe/', this.tarefaId])
    })
  }

  cancelar() {
    this.router.navigate(['/listarTarefa'])
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
