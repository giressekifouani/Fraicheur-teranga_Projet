import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationFormPage } from './confirmation-form.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmationFormPageRoutingModule {}
