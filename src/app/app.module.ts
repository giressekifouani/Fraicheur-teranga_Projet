import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { WhatsAppModalComponent } from './whatsapp-modal/whatsapp-modal.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { DynamicSliderComponent } from './dynamic-slider/dynamic-slider.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, WhatsAppModalComponent],
 // entryComponents: [WhatsAppModalComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SharedModule],
  providers: [File, FileOpener, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },  InAppBrowser],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
