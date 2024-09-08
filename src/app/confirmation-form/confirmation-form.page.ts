import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, Platform } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { WhatsAppModalComponent } from '../whatsapp-modal/whatsapp-modal.component';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-confirmation-form',
  templateUrl: './confirmation-form.page.html',
  styleUrls: ['./confirmation-form.page.scss'],
})
export class ConfirmationFormPage implements OnInit {
  name: string = '';
  phone: string = '';
  adresse: string = '';
  cartItems: any[] = [];
  totalPrice: number = 0;
  adminPhoneNumber: string = '221776530197';

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private navParams: NavParams,
    private file: File,
    private fileOpener: FileOpener,
    private platform: Platform
  ) {
    this.cartItems = this.navParams.get('cartItems') || [];
  }

  ngOnInit() {
    this.calculateTotalPrice();
  }

  convertPrice(priceString: any): number {
    const numberString = priceString.toString().replace(/[^0-9.]/g, '');
    return parseFloat(numberString);
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, item) => total + this.convertPrice(item.price) * (item.quantity || 1), 0);
  }

  closeModal() {
    this.modalController.dismiss();
  }

  /*async submitForm() {
    if (!this.name || !this.phone || !this.adresse) {
      const alert = await this.alertController.create({
        header: 'Erreur',
        message: 'Veuillez remplir tous les champs.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.generatePdfAndSendViaWhatsApp();
  }*/

    async submitForm() {

      if (!this.name || !this.phone || !this.adresse) {
        const alert = await this.alertController.create({
          header: 'Erreur',
          message: 'Veuillez remplir tous les champs avant de confirmer votre commande.',
          buttons: ['OK']
        });
        await alert.present();
        return;
      }
      //const adminPhoneNumber = '221771824134'; // Remplacez par le numéro de téléphone de l'administrateur
      //const orderDetails = this.items.map(item => `${item.title}: ${item.price} FCFA`).join('\n');
      const orderDetails = this.cartItems.map(item => `Nom produit : ${item.title} \n Quantité : ${item.quantity} \n Prix : ${item.price} FCFA \n`).join('\n\n');
      const message = `Bonjour DM+ Distribution! je confirme la réception de ma commande.\n\nNom: ${this.name}\nTéléphone: ${this.phone}\n Adresse: ${this.adresse} \n\nDétails de la commande:\n${orderDetails} \n TOTAL TTC: ${this.totalPrice} FCFA`;
      //const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(message)}`;
      const whatsappUrl = `https://wa.me/${this.adminPhoneNumber}?text=${encodeURIComponent(message)}`;
  
      const modal = await this.modalController.create({
        component: WhatsAppModalComponent,
        componentProps: { whatsappUrl }
      });
      
      await modal.present();
    }

  generatePdfAndSendViaWhatsApp() {
    const documentDefinition = this.getDocumentDefinition();

    pdfMake.createPdf(documentDefinition).getBuffer((buffer: Uint8Array) => {
      const blob = new Blob([buffer], { type: 'application/pdf' });

      this.platform.ready().then(() => {
        if (this.platform.is('cordova')) {
          const fileName = 'commande.pdf';
          const filePath = this.file.dataDirectory + fileName;

          this.file.writeFile(this.file.dataDirectory, fileName, blob, { replace: true }).then(fileEntry => {
            const adminPhoneNumber = '221776530197';
            const message = `Bonjour DM+ Distribution! Je confirme la réception de ma commande.\n\nNom: ${this.name}\nTéléphone: ${this.phone}`;

            const fileUri = fileEntry.nativeURL;
            const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappUrl, '_system');

            setTimeout(() => {
              window.open(`whatsapp://send?phone=${adminPhoneNumber}&text=${encodeURIComponent(message)}&attachment=${fileUri}`, '_system');
            }, 2000);
          }).catch(err => console.error('Erreur lors de l\'écriture du fichier', err));
        } else {
          const url = URL.createObjectURL(blob);
          window.open(url, '_blank');
        }
      });
    });
  }

  getDocumentDefinition() {
    return {
      content: [
        { text: 'DM+ Distribution', style: 'header' },
        { text: 'Confirmation de commande', style: 'subheader' },
        { text: `Nom: ${this.name}`, margin: [0, 20, 0, 0] },
        { text: `Téléphone: ${this.phone}`, margin: [0, 0, 0, 20] },
        { text: `Adresse: ${this.adresse}`, margin: [0, 0, 0, 20] },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 'auto'],
            body: [
              ['Nom', 'Description', 'Prix (FCFA)', 'Quantité'],
              ...this.cartItems.map(item => [item.title, item.content, this.convertPrice(item.price), item.quantity]),
              [{ text: 'Total', colSpan: 3 }, {}, {}, this.totalPrice]
            ]
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        },
        subheader: {
          fontSize: 14,
          bold: true
        }
      }
    };
  }
}
