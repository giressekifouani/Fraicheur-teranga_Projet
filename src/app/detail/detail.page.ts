import { CategoriePage } from './../categorie/categorie.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController} from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ConfirmationFormPage } from '../confirmation-form/confirmation-form.page';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;
  cartItemCount: number = 0;
  cartItemsCount: number= 0;


  ngOnInit() {

        // Vérifiez si des éléments de panier ont été transmis via le routeur
        if (this.route.snapshot.data['cartItems']) {
          this.cartItems = this.route.snapshot.data['cartItems'];
         //this.calculateTotalPrice();
        }
        this.calculateTotalPrice();
  }
  constructor(private cartService:CartService, private route: ActivatedRoute,
     private modalController: ModalController, private alertController: AlertController, 
     private nctl : NavController) { }

 /* closeModal() {
    this.modalController.dismiss();
  }*/

  closeModal() {
    /*this.cartService.clearCart();
    this.cartItems = [];
    this.totalPrice = 0;*/
    this.modalController.dismiss();
  }

  annuler(){
    this.cartService.clearCart();
    this.cartItems = [];
    this.totalPrice = 0;
    this.modalController.dismiss();
    this.cartItemsCount = 0;
  }

  async confirmer(){
    await this.modalController.dismiss();

    
      const alert = await this.alertController.create({
        header: 'Confirmer!',
        message: 'Voulez-vous confirmer la commande?',
        buttons: [
          {
            text: 'Non',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {  
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Oui',
            handler: async() => {
              console.log('Confirm Okay');
              // this.nctl.navigateForward(`/categorie`);
              await this.OpenNouveauModal();
            }
          }
        ]
      });
    
      await alert.present();
    }

    async submitOrder() {
      await this.OpenNouveauModal();
      this.cartService.clearCart();
      this.cartItems = [];
      this.totalPrice = 0;
      this.modalController.dismiss();
    }

    async OpenNouveauModal(){
      const modal = await this.modalController.create({
        component: ConfirmationFormPage,
        // Vous pouvez passer des données au modal via componentProps
        componentProps: {
          // Exemple: customData: 'value'
          cartItems:this.cartItems
        }
      });
      return await modal.present();
    }

    convertPrice(priceString: string): number {
      // Retirer tout ce qui n'est pas un chiffre ou un point (pour les décimales)
      const numberString = priceString.replace(/[^0-9.]/g, '');
      // Convertir la chaîne de caractères en nombre
      return parseFloat(numberString);
    }
  
    calculateTotalPrice() {
      //this.totalPrice = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      this.totalPrice = this.cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
    }

    
    /*removeItem(itemId: number) {
      this.cartService.removeFromCart(itemId);
      this.cartItems = this.cartService.getCartItems();
      this.calculateTotalPrice();

    }*/
    removeItem(itemId: number) {
      this.cartService.removeFromCart(itemId);
      this.cartItems = this.cartService.getCartItems();
      this.calculateTotalPrice();
      this.cartItemCount = this.cartService.getCartItemCount();
    }

}
