import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CriarTarefaComponent } from './componentes/tarefas/criar-tarefa/criar-tarefa.component';
import { ListarTarefaComponent } from './componentes/tarefas/listar-tarefa/listar-tarefa.component';
import { HttpClientModule } from '@angular/common/http';
import { TarefaComponent } from './componentes/tarefas/tarefa/tarefa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarTarefaComponent } from './componentes/tarefas/editar-tarefa/editar-tarefa.component';
import { ExcluirTarefaComponent } from './componentes/tarefas/excluir-tarefa/excluir-tarefa.component';
import { TarefaDetalheComponent } from './componentes/tarefas/tarefa-detalhe/tarefa-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CriarTarefaComponent,
    ListarTarefaComponent,
    TarefaComponent,
    EditarTarefaComponent,
    ExcluirTarefaComponent,
    TarefaDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
