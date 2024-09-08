import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanierbisPage } from './panierbis.page';

const routes: Routes = [
  {
    path: '',
    component: PanierbisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanierbisPageRoutingModule {}
