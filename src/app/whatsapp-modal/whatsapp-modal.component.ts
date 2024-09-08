import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-whatsapp-modal',
  templateUrl: './whatsapp-modal.component.html',
  styleUrls: ['./whatsapp-modal.component.scss'],
})
export class WhatsAppModalComponent implements OnInit {
  @Input() whatsappUrl: string = '';

  constructor(private modalController: ModalController, private iab: InAppBrowser) { }

  /*ngOnInit() {
    this.iab.create(this.whatsappUrl, '_system');
  }*/

  ngOnInit() {
    const browser = this.iab.create(this.whatsappUrl, '_system');
    browser.on('exit').subscribe(() => {
      this.closeModal();
    });
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
