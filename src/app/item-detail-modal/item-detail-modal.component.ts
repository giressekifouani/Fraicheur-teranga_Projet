import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-item-detail-modal',
  templateUrl: './item-detail-modal.component.html',
  styleUrls: ['./item-detail-modal.component.scss'],
})
export class ItemDetailModalComponent  implements OnInit {

  @Input() item : any;
  cartItemsCount: number = 0;
  cartItems: any[] = [];
  searchTerm: string = '';
  filteredItems: any[] = [];


  constructor(private ctr : ModalController, private cartService: CartService) { }

  ngOnInit() {}

  close(){
    this.ctr.dismiss();
  }
  addToCart(item: any) {
    if (!item.quantity || item.quantity < 1) {
      item.quantity = 1;
    } else {
      item.quantity -= 1;
    } 
    this.cartService.addToCart(item, item.quantity);
    //this.updateCartItemsCount();
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

  openCartModal(){
    this.ctr.dismiss();
  }
}
