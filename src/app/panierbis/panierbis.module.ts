import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanierbisPageRoutingModule } from './panierbis-routing.module';

import { PanierbisPage } from './panierbis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanierbisPageRoutingModule
  ],
  declarations: [PanierbisPage]
})
export class PanierbisPageModule {}
