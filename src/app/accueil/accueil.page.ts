import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { ModalController } from '@ionic/angular';


import { DetailPage } from '../detail/detail.page';
import { CategoriePage } from '../categorie/categorie.page';
import { PanierPage } from '../panier/panier.page';

import { CartService } from '../services/cart.service';
//import { AccueilPage} from '../accueil/accueil.page';

import { ItemService } from '../services/item.service';

import Swiper from 'swiper';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit  {


  // cartItemsCount = 0;
  slides = [
    { img: 'assets/image/Fruit.jpg', title: 'First slide label', content: 'Some representative placeholder content for the first slide.', interval: 10000 },
    { img: 'assets/images/slide2.jpg', title: 'Second slide label', content: 'Some representative placeholder content for the second slide.', interval: 2000 },
    { img: 'assets/images/slide3.jpg', title: 'Third slide label', content: 'Some representative placeholder content for the third slide.', interval: 5000 }
  ];

  cards = [
    { img: 'assets/image/Fruit.jpg', title: 'Frais de la bonne moisson d\'été', subtitle: '', content: '' },
    { img: 'assets/image/Fruit.jpg', title: 'Pharmacie', subtitle: '', content: '' },
    { img: 'assets/image/Fruit.jpg', title: 'Dossier médical', subtitle: '', content: 'Dossier médical constitué par le médecin du service d\'urgence' }
  ];

  items = [
    { id: 1, img: 'assets/image/Tomate2.jpg', title: 'Tomate', subtitle: 'Subtitle 1', content: 'Le garder dans un endroit frais, sec, et à l’abri de la lumière.', price: 7000  },
    { id: 2, img: 'assets/image/Fraise5.jpg', title: 'Fraise', subtitle: 'Subtitle 2', content: 'Jus pressé de fraise', price: 5000 },
    { id: 4, img: 'assets/image/CitronVert.jpg', title: 'Citron ', subtitle: 'Subtitle 3', content: 'Une fois coupé ou cuit il perd progressivement ses vitamines.', price: 3000 },
    { id: 3, img: 'assets/image/Ananas.jpg', title: 'Ananas', subtitle: 'Subtitle 3', content: 'Sensible au froid (-7°C) et aux chocs Pour accélérer sa maturité, enveloppez-le dans du papier kraft', price: 2500},
/*
    { id: 5, img: 'assets/image/Broccoli.jpg', title: 'Brocoli', subtitle: 'Subtitle 3', content: 'Une fois coupé ou cuit il perd progressivement ses vitamines', price: 2000 },
    { id: 6, img: 'assets/image/Melon2.jpg', title: 'Melon ', subtitle: 'Subtitle 3', content: 'Conserver dans une boîte hermétique', price: 1500 },
    { id: 7, img: 'assets/image/Frambroise.jpg', title: 'Framboise', subtitle: 'Subtitle 3', content: 'Frambroise', price: 2000 },
    { id: 8, img: 'assets/image/Mangue.jpg', title: 'Mangue', subtitle: 'Subtitle 3', content: 'Sensible au froid (-6°C). Le fruit termine très bien sa maturation à l’air libre', price: 1500 },
    { id: 9, img: 'assets/image/Fraise6.jpg', title: 'Fraise', subtitle: 'Subtitle 3', content: 'Fraise rouge', price: 1000 },
    { id: 10, img: 'assets/image/Orange.jpg', title: 'Orange', subtitle: 'Subtitle 2', content: 'Ne pas conserver dans des pièces trop chaudes car elle risque de se dessécher.', price: 5000 },
    { id: 11, img: 'assets/image/Pomplemousse.jpg', title: 'pamplemousse', subtitle: 'Subtitle 3', content: 'Consommez le fruit immédiatement une fois ouvert sans quoi la pulpe asseche', price: 2500},
    { id: 12, img: 'assets/image/Carotte.jpg', title: 'Carotte', subtitle: 'Subtitle 3', content: 'Conservez dans un sachet à trous ou dans une boîte hermétique', price: 3000 },
    { id: 13, img: 'assets/image/Melon1.jpg', title: 'Melon', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 14, img: 'assets/image/Cocombre.jpg', title: 'Concombre', subtitle: 'Subtitle 3', content: 'La congélation est la façon la plus simple et la plus rapide de conserver les courgettes', price: 1500 },
    { id: 15, img: 'assets/image/Aubergine.jpg', title: 'Aubergine', subtitle: 'Subtitle 3', content: 'Aubergine ', price: 2000 },
    { id: 16, img: 'assets/image/Melon2.jpg', title: 'Haricot', subtitle: 'Subtitle 3', content: 'Melon jaune', price: 1500 },
    { id: 17, img: 'assets/image/Fraise5.jpg', title: 'Brocoli', subtitle: 'Subtitle 2', content: 'Jus pressé de fraise', price: 5000 },
    { id: 18, img: 'assets/image/Fraise3.jpg', title: 'bettrave', subtitle: 'Subtitle 3', content: 'Melon', price: 2500},
    { id: 19, img: 'assets/image//melong.jpeg', title: 'Endive', subtitle: 'Subtitle 3', content: 'Melon Melon et pasteque', price: 3000 },
    { id: 20, img: 'assets/image/Melon1.jpg', title: 'Mais', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 21, img: 'assets/image/Melon2.jpg', title: 'Manioc', subtitle: 'Subtitle 3', content: 'Melon jaune', price: 1500 },
    { id: 22, img: 'assets/image/Melon1.jpg', title: 'Navet', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 23, img: 'assets/image/Melon2.jpg', title: 'Poivron', subtitle: 'Subtitle 3', content: 'Melon jaune', price: 1500 },
    { id: 24, img: 'assets/image/Fraise5.jpg', title: 'salade', subtitle: 'Subtitle 2', content: 'Jus pressé de fraise', price: 5000 },
    { id: 25, img: 'assets/image/Fraise3.jpg', title: 'Tomate', subtitle: 'Subtitle 3', content: 'Melon', price: 2500},
    { id: 26, img: 'assets/image//melong.jpeg', title: 'Taro', subtitle: 'Subtitle 3', content: 'Melon Melon et pasteque', price: 3000 },
    { id: 27, img: 'assets/image/Melon1.jpg', title: 'Citron', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 28, img: 'assets/image/Melon2.jpg', title: 'Mangue', subtitle: 'Subtitle 3', content: 'Melon jaune', price: 1500 },
    { id: 29, img: 'assets/image/Melon1.jpg', title: 'Longan', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 30, img: 'assets/image/Melon2.jpg', title: 'Lime', subtitle: 'Subtitle 3', content: 'Melon jaune', price: 1500 },
    { id: 31, img: 'assets/image/Melon1.jpg', title: 'Kumquat', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 32, img: 'assets/image/Melon2.jpg', title: 'Avocat', subtitle: 'Subtitle 3', content: 'Melon jaune', price: 1500 },
    { id: 33, img: 'assets/image/Fraise5.jpg', title: 'BrocCélerioli', subtitle: 'Subtitle 2', content: 'Jus pressé de fraise', price: 5000 },
    { id: 34, img: 'assets/image/Fraise3.jpg', title: 'Champignon', subtitle: 'Subtitle 3', content: 'Melon', price: 2500},
    { id: 35, img: 'assets/image//melong.jpeg', title: 'Chou fleur', subtitle: 'Subtitle 3', content: 'Melon Melon et pasteque', price: 3000 },
    { id: 36, img: 'assets/image/Melon1.jpg', title: 'Chou rave', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 37, img: 'assets/image/Melon2.jpg', title: 'Chou rouge', subtitle: 'Subtitle 3', content: 'Melon jaune', price: 1500 },
    { id: 38, img: 'assets/image/Melon1.jpg', title: 'Fenouil', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 39, img: 'assets/image/Melon2.jpg', title: 'Chou vert', subtitle: 'Subtitle 3', content: 'Melon jaune', price: 1500 },
    { id: 40, img: 'assets/image/Fraise5.jpg', title: 'Ognon sec', subtitle: 'Subtitle 2', content: 'Jus pressé de fraise', price: 5000 },
    { id: 41, img: 'assets/image/Fraise3.jpg', title: 'Radis noir', subtitle: 'Subtitle 3', content: 'Melon', price: 2500},
    { id: 42, img: 'assets/image//melong.jpeg', title: 'Radis', subtitle: 'Subtitle 3', content: 'Melon Melon et pasteque', price: 3000 },
    { id: 43, img: 'assets/image/Melon1.jpg', title: 'Herbes', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 44, img: 'assets/image/Melon2.jpg', title: 'Igname', subtitle: 'Subtitle 3', content: 'Melon jaune', price: 1500 },
    { id: 45, img: 'assets/image/Melon1.jpg', title: 'Pomme de terre', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 46, img: 'assets/image/Melon2.jpg', title: 'Squash', subtitle: 'Subtitle 3', content: 'Melon jaune', price: 1500 },
*/

  ];
  
  //cartItems: any[] = []; 
  cartItemsCount: number = 0;
  cartItems: any[] = [];
  searchTerm: string = '';
  filteredItems: any[] = [];

  constructor(private modalController: ModalController, private cartService: CartService, public itemApi: ItemService) {
    this.filteredItems = this.items;
  }


  addToCart(item: any) {
    //this.cartService.addToCart(item);
    this.updateCartItemsCount();
  }

  async openCartModal() {
    const cartModal = await this.modalController.create({
      component: DetailPage,
      componentProps: {
        cartItems: this.cartService.getCartItems(),
      }
    });
    await cartModal.present();
    const { data } = await cartModal.onDidDismiss();
    if (data && data.confirmed) {
      this.openConfirmationModal();
    }
  }

  async openConfirmationModal() {
    const confirmationModal = await this.modalController.create({
      component: CategoriePage,
      componentProps: {

      }
    });
    await confirmationModal.present();
  }

  updateCartItemsCount() {
    this.cartItemsCount = this.cartService.getCartItemsCount();
  }

  async openPatientDetailsModals() {
    const modal = await this.modalController.create({
      component: DetailPage ,
      componentProps: {

      }
    });
    return await modal.present();
  }

  filterItems(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredItems = this.items.filter(item =>
      item.title.toLowerCase().includes(searchTerm)
    );
  }

 async OpenImgModal(){
  const OpenImgModal = await this.modalController.create({
    component: PanierPage ,
    componentProps: {

    }
  });
  await OpenImgModal.present();
 }

 ngAfterViewInit() {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 5, /* Adjust the number of slides per view */
    spaceBetween: 10, /* Space between slides */
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

slideOpts = {
 slidesPerViews: 2.2,
 /*initialSlide: 0,
 speed: 400*/
};
slideOpts1 = {
  slidesPerViews: 1.3,
};

uneItem: any[] = [];

ngOnInit(){
  this.uneItem = this.itemApi.items
}

}
