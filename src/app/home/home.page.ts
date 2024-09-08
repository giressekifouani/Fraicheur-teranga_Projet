import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


import { DetailPage } from '../detail/detail.page';
import { CategoriePage } from '../categorie/categorie.page';
import { PanierPage } from '../panier/panier.page';

import { CartService } from '../services/cart.service';
//import { AccueilPage} from '../accueil/accueil.page';

import { ItemService } from '../services/item.service';

import { register } from 'swiper/element/bundle';
import { IonicSlides } from '@ionic/angular';
import { SwiperOptions } from 'swiper/types';

import { ItemDescriptionModalPage } from '../item-description-modal/item-description-modal.page';

import Swiper from 'swiper';
import { ItemDescriptionModalPageModule } from '../item-description-modal/item-description-modal.module';
import { ItemDetailModalComponent } from '../item-detail-modal/item-detail-modal.component';

register();
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
//@Input() slides: any[] = []
swiperModules = [IonicSlides];
//item : any;

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

  itemsBis = [
    { id: 42, img: 'assets/ImageFruit/Igname.png', title: 'Igname', subtitle: 'Subtitle 3', content: 'Igname Naturel', price: 3000 },
    { id: 43, img: 'assets/ImageFruit/Gigembre.png', title: 'Gigembre', subtitle: 'Subtitle 3', content: 'Gegimbre pur et naturel', price: 2000 },
    { id: 44, img: 'assets/ImageFruit/Corossol.png', title: 'Corossol', subtitle: 'Subtitle 3', content: 'Corossol', price: 1500 },
    { id: 45, img: 'assets/ImageFruit/Piments.png', title: 'Piment', subtitle: 'Subtitle 3', content: 'Piment frais', price: 2000 },
    { id: 46, img: 'assets/ImageFruit/Raisins.png', title: 'Raisins', subtitle: 'Subtitle 3', content: 'Raisin', price: 1500 },

  ];

  items1 = [
    { id: 1, img: 'assets/ImageFruit/épinards.png', title: 'Légumes', subtitle: 'Subtitle 1', content: 'Le garder dans un endroit frais, sec, et à l’abri de la lumière.', price: 7000  },
    { id: 2, img: 'assets/ImageFruit/Citrons.png', title: 'Fruits', subtitle: 'Subtitle 2', content: 'Jus pressé de fraise', price: 5000 },

  ]

  items = [
    { id: 1, img: 'assets/ImageFruit/Patates.png', title: 'Patate', subtitle: 'Subtitle 1', content: 'Le garder dans un endroit frais, sec, et à l’abri de la lumière.', price: 7000  },
    { id: 2, img: 'assets/ImageFruit/Pêche.png', title: 'Pêche', subtitle: 'Subtitle 2', content: 'Jus pressé de fraise', price: 5000 },
    { id: 4, img: 'assets/ImageFruit/Poivrons.png', title: 'Poivron ', subtitle: 'Subtitle 3', content: 'Une fois coupé ou cuit il perd progressivement ses vitamines.', price: 3000 },
    { id: 3, img: 'assets/ImageFruit/Poire.png', title: 'Poivre', subtitle: 'Subtitle 3', content: 'Sensible au froid (-7°C) et aux chocs Pour accélérer sa maturité, enveloppez-le dans du papier kraft', price: 2500},
    { id: 4, img: 'assets/ImageFruit/Poivrons (2).png', title: 'Poivron', subtitle: 'Subtitle 3', content: 'Sensible au froid (-7°C) et aux chocs Pour accélérer sa maturité, enveloppez-le dans du papier kraft', price: 2500},


    { id: 5, img: 'assets/ImageFruit/Tomates.png', title: 'Tomate', subtitle: 'Subtitle 3', content: 'Une fois coupé ou cuit il perd progressivement ses vitamines', price: 2000 },
    { id: 6, img: 'assets/ImageFruit/Choux.png', title: 'Choux ', subtitle: 'Subtitle 3', content: 'Conserver dans une boîte hermétique', price: 1500 },
    { id: 7, img: 'assets/ImageFruit/Pamplemousse.png', title: 'Pamplemousse', subtitle: 'Subtitle 3', content: 'Pamplemousse', price: 2000 },
    { id: 8, img: 'assets/ImageFruit/Kiwi.png', title: 'Kiwi', subtitle: 'Subtitle 3', content: 'Sensible au froid (-6°C). Le fruit termine très bien sa maturation à l’air libre', price: 1500 },
    { id: 9, img: 'assets/ImageFruit/Navet.png', title: 'Navete', subtitle: 'Subtitle 3', content: 'Navet', price: 1000 },
    { id: 10, img: 'assets/ImageFruit/Papaye.png', title: 'Papaye', subtitle: 'Subtitle 2', content: 'Ne pas conserver dans des pièces trop chaudes car elle risque de se dessécher.', price: 5000 },
    { id: 11, img: 'assets/ImageFruit/Manioc.png', title: 'Manioc', subtitle: 'Subtitle 3', content: 'Consommez le fruit immédiatement une fois ouvert sans quoi la pulpe asseche', price: 2500},
    { id: 12, img: 'assets/ImageFruit/Haricots.png', title: 'Haricot', subtitle: 'Subtitle 3', content: 'Conservez dans un sachet à trous ou dans une boîte hermétique', price: 3000 },
    { id: 13, img: 'assets/ImageFruit/Avocats.png', title: 'Avocat', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 14, img: 'assets/ImageFruit/Carottes.png', title: 'Carotte', subtitle: 'Subtitle 3', content: 'La congélation est la façon la plus simple et la plus rapide de conserver les courgettes', price: 1500 },
    { id: 15, img: 'assets/ImageFruit/Aubergine.jpg', title: 'Aubergine', subtitle: 'Subtitle 3', content: 'Aubergine ', price: 2000 },
    { id: 16, img: 'assets/ImageFruit/Melon.png', title: 'Melon', subtitle: 'Subtitle 3', content: 'Melon jaune', price: 1500 },
    { id: 17, img: 'assets/ImageFruit/Fraise5.jpg', title: 'Brocoli', subtitle: 'Subtitle 2', content: 'Jus pressé de fraise', price: 5000 },
    { id: 18, img: 'assets/ImageFruit/Fraise3.jpg', title: 'bettrave', subtitle: 'Subtitle 3', content: 'Melon', price: 2500},
    { id: 19, img: 'assets/ImageFruit/melong.jpeg', title: 'Endive', subtitle: 'Subtitle 3', content: 'Melon Melon et pasteque', price: 3000 },
    { id: 20, img: 'assets/ImageFruit/Melon1.jpg', title: 'Mais', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 21, img: 'assets/ImageFruit/Melon2.jpg', title: 'Manioc', subtitle: 'Subtitle 3', content: 'Melon jaune', price: 1500 },
    { id: 22, img: 'assets/ImageFruit/Melon1.jpg', title: 'Navet', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 23, img: 'assets/ImageFruit/Melon2.jpg', title: 'Poivron', subtitle: 'Subtitle 3', content: 'Melon jaune', price: 1500 },
    { id: 24, img: 'assets/ImageFruit/Fraise5.jpg', title: 'salade', subtitle: 'Subtitle 2', content: 'Jus pressé de fraise', price: 5000 },
    { id: 25, img: 'assets/ImageFruit/Fraise3.jpg', title: 'Tomate', subtitle: 'Subtitle 3', content: 'Melon', price: 2500},
    { id: 26, img: 'assets/ImageFruit/melong.jpeg', title: 'Taro', subtitle: 'Subtitle 3', content: 'Melon Melon et pasteque', price: 3000 },
    { id: 27, img: 'assets/ImageFruit/Melon1.jpg', title: 'Citron', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 28, img: 'assets/ImageFruit/Melon2.jpg', title: 'Mangue', subtitle: 'Subtitle 3', content: 'Melon jaune', price: 1500 },
    { id: 29, img: 'assets/ImageFruit/Melon1.jpg', title: 'Longan', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 30, img: 'assets/ImageFruit/Melon2.jpg', title: 'Lime', subtitle: 'Subtitle 3', content: 'Melon jaune', price: 1500 },
    { id: 31, img: 'assets/ImageFruit/Melon1.jpg', title: 'Kumquat', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 32, img: 'assets/ImageFruit/Brocolis.png', title: 'Brocolis', subtitle: 'Subtitle 3', content: 'Brocolis', price: 1500 },
    { id: 33, img: 'assets/ImageFruit/Gombo.png', title: 'Gombo', subtitle: 'Subtitle 2', content: 'Gombo bio', price: 5000 },
    { id: 34, img: 'assets/ImageFruit/Fraises.png', title: 'Fraise', subtitle: 'Subtitle 3', content: 'Fraise', price: 2500},
    { id: 35, img: 'assets/ImageFruit/Concombre.png', title: 'Chou fleur', subtitle: 'Subtitle 3', content: 'Melon Melon et pasteque', price: 3000 },
    { id: 36, img: 'assets/ImageFruit/Choux.png', title: 'Chou rave', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 37, img: 'assets/ImageFruit/Chou fleur.png', title: 'Chou rouge', subtitle: 'Subtitle 3', content: 'Melon jaune', price: 1500 },
    { id: 38, img: 'assets/ImageFruit/Choux vioelt.png', title: 'Fenouil', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 39, img: 'assets/ImageFruit/Carottes.png', title: 'Chou vert', subtitle: 'Subtitle 3', content: 'Melon jaune', price: 1500 },
    { id: 40, img: 'assets/ImageFruit/Bissap.png', title: 'Ognon sec', subtitle: 'Subtitle 2', content: 'Jus pressé de fraise', price: 5000 },
    { id: 41, img: 'assets/ImageFruit/112913160.png', title: 'Radis noir', subtitle: 'Subtitle 3', content: 'Melon', price: 2500},
    { id: 42, img: 'assets/ImageFruit/Igname.png', title: 'Radis', subtitle: 'Subtitle 3', content: 'Melon Melon et pasteque', price: 3000 },
    { id: 43, img: 'assets/ImageFruit/Gigembre.png', title: 'Herbes', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 44, img: 'assets/ImageFruit/Corossol.png', title: 'Igname', subtitle: 'Subtitle 3', content: 'Melon jaune', price: 1500 },
    { id: 45, img: 'assets/ImageFruit/Piments.png', title: 'Pomme de terre', subtitle: 'Subtitle 3', content: 'Melon', price: 2000 },
    { id: 46, img: 'assets/ImageFruit/Raisins.png', title: 'Squash', subtitle: 'Subtitle 3', content: 'Melon jaune', price: 1500 },


  ];
  
  //cartItems: any[] = []; 
  cartItemsCount: number = 0;
  cartItems: any[] = [];
  searchTerm: string = '';
  filteredItems: any[] = [];

  constructor(private modalController: ModalController, private cartService: CartService, public itemApi: ItemService) {
    this.filteredItems = this.items;
  }

    increaseQuantity(item: any) {
      if (!item.quantity) {
        item.quantity = 1;
      } else {
        item.quantity += 1;
      }
    }
  
    decreaseQuantity(item: any) {
      if (!item.quantity || item.quantity <= 1) {
        item.quantity = 1;
      } else {
        item.quantity -= 1;
      } 
    }

    addToCart(item: any) {
      if (!item.quantity || item.quantity < 1) {
        item.quantity = 1;
      } else {
        item.quantity -= 1;
      } 
      this.cartService.addToCart(item, item.quantity);
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
  slidesPerView: 1.5,
  spaceBetween: 10,
  initialSlide: 0,
  speed: 400,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

uneItem: any[] = [];

ngOnInit(){
  this.uneItem = this.itemApi.items
}

showAllItems = false;
itemsToShow = 4;

toggleShowAll() {
  this.showAllItems = !this.showAllItems;
  this.itemsToShow = this.showAllItems ? 10 : 4; // Afficher 10 articles si 'showAllItems' est vrai, sinon 4

}

swiperSlideChanged(e: any){
  console.log('changer: ', e);
}

goPrev(){
  this.swiper?.slidePrev();
}

goNext(){
  this.swiper?.slideNext();
}

@ViewChild('swiper')
swiperRef: ElementRef | undefined;
swiper?: Swiper;

swiperReady(){
  this.swiper = this.swiperRef?.nativeElement.swiper;
}

async OpenDescriptionModal(item: any){
  const modal = await this.modalController.create({
    component: ItemDetailModalComponent,
    componentProps: {
      item: item
    }
  });
  return await modal.present();
}

/*async OpenDescModal(){
  const OpenImgModal = await this.modalController.create({
    component: ItemDescriptionModalPage ,
    componentProps: {
      
    }
  });
 // await OpenImgModal.present();
 return await OpenImgModal.present();
 }*/

}


