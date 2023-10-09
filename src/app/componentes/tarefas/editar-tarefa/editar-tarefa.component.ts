import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TarefaService } from '../tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  formulario!: FormGroup

  constructor(private service: TarefaService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(parseInt(id!)).subscribe((tarefa) => {
      this.formulario = this.formBuilder.group({
        id: [tarefa.id],
        titulo: [tarefa.titulo]
      })
    })
  }

  editarTarefa() {
    this.service.editar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarTarefa'])
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
