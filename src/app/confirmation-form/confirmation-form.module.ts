import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationFormPageRoutingModule } from './confirmation-form-routing.module';

import { ConfirmationFormPage } from './confirmation-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationFormPageRoutingModule
  ],
  declarations: [ConfirmationFormPage]
})
export class ConfirmationFormPageModule {}
