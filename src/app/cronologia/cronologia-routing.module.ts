import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CronologiaPage } from './cronologia.page';

const routes: Routes = [
  {
    path: '',
    component: CronologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CronologiaPageRoutingModule {}
