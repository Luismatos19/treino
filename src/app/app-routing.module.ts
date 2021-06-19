import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './components/film/film.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { PersonagensComponent } from './components/personagens/personagens.component';
import { VeiculosComponent } from './components/veiculos/veiculos.component';

const routes: Routes = [
  {
    path: '',
    component: MenuTemplateComponent,
    children: [
      {
        path: '',
        component: FilmComponent
      },
      {
        path: 'personagens',
        component: PersonagensComponent
      },
      {
        path: 'veiculos',
        component: VeiculosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
