import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DynamicSliderComponent } from '../dynamic-slider/dynamic-slider.component';



@NgModule({
  declarations: [DynamicSliderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [DynamicSliderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
