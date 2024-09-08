import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDescriptionModalPageRoutingModule } from './item-description-modal-routing.module';

import { ItemDescriptionModalPage } from './item-description-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDescriptionModalPageRoutingModule
  ],
  declarations: [ItemDescriptionModalPage]
})
export class ItemDescriptionModalPageModule {}
