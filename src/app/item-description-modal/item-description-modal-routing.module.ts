import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemDescriptionModalPage } from './item-description-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ItemDescriptionModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDescriptionModalPageRoutingModule {}
