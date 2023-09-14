import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TarefaService } from '../tarefa.service';
import { Router } from '@angular/router';
import { Tarefa } from '../tarefa';

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
}
