import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarTarefaComponent } from './componentes/tarefas/criar-tarefa/criar-tarefa.component';
import { ListarTarefaComponent } from './componentes/tarefas/listar-tarefa/listar-tarefa.component';
import { EditarTarefaComponent } from './componentes/tarefas/editar-tarefa/editar-tarefa.component';
import { ExcluirTarefaComponent } from './componentes/tarefas/excluir-tarefa/excluir-tarefa.component';
import { TarefaDetalheComponent } from './componentes/tarefas/tarefa-detalhe/tarefa-detalhe.component';

const routes: Routes = [
  {path: '',
  redirectTo: 'listarTarefa',
  pathMatch: 'full'
},
{
  path: 'listarTarefa',
  component: ListarTarefaComponent
},
{
  path: 'criarTarefa',
  component: CriarTarefaComponent
},
{
  path: 'tarefa/editarTarefa/:id',
  component: EditarTarefaComponent
},
{
  path: 'listarTarefa/tarefa/excluirTarefa/:id',
  component: ExcluirTarefaComponent
},
{
  path: 'tarefa/tarefaDetalhe/:id',
  component: TarefaDetalheComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
