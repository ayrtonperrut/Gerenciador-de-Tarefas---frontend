import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { TarefaService } from '../tarefa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.css']
})
export class CriarTarefaComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: TarefaService
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      titulo: ['']
    })
  }

  criarTarefa() {
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['listarTarefa'])
    })
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
