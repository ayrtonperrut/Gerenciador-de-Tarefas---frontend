import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarTarefaComponent } from './componentes/tarefas/criar-tarefa/criar-tarefa.component';
import { ListarTarefaComponent } from './componentes/tarefas/listar-tarefa/listar-tarefa.component';
import { EditarTarefaComponent } from './componentes/tarefas/editar-tarefa/editar-tarefa.component';
import { ExcluirTarefaComponent } from './componentes/tarefas/excluir-tarefa/excluir-tarefa.component';
import { TarefaDetalheComponent } from './componentes/tarefas/tarefa-detalhe/tarefa-detalhe.component';
import { CriarItemComponent } from './componentes/tarefas/itens/criar-item/criar-item.component';
import { EditarItemComponent } from './componentes/tarefas/itens/editar-item/editar-item.component';
import { ExcluirItemComponent } from './componentes/tarefas/itens/excluir-item/excluir-item.component';

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
},
{
  path: 'tarefa/tarefaDetalhe/:tarefaId/criarItem',
  component: CriarItemComponent
},
{
  path: 'item/editarItem/:id',
  component: EditarItemComponent
},
{
  path: 'item/excluirItem/:id',
  component: ExcluirItemComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
