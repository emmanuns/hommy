import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroDormPage } from './cadastro-dorm.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroDormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroDormPageRoutingModule {}
