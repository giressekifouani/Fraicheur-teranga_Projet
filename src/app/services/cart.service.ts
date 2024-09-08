import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() { }

  // Ajouter un élément au panier
  /*addToCart(item: any) {
    this.cartItems.push(item);
  }*/

  /*addToCart(item: any) {
    const existingItem = this.cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
  }*/


  /*addToCart(item: any) {
    const existingItem = this.cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
  }*/

   /* addToCart(item: any, quantity: number) {
      const existingItem = this.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.cartItems.push({ ...item, quantity });
      }
    }*/


      addToCart(item: any, quantity: number) {
        const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          item.quantity = quantity;
          this.cartItems.push(item);
        }
      }
    
      updateCart(item: any, quantity: number) {
        const cartItem = this.cartItems.find(cartItem => cartItem.id === item.id);
        if (cartItem) {
          cartItem.quantity = quantity;
          if (quantity === 0) {
            this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
          }
        }
      }

  removeFromCart(itemId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
  }

  // Récupérer tous les éléments du panier
  getCartItems() {
    return this.cartItems;
  }

  // Vider le panier
  /*clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }*/

  // Récupérer le nombre d'éléments dans le panier
  /*getCartItemsCount() {
    return this.cartItems.length;
  }*/
  getCartItemsCount() {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }

  getCartItemCount() {
    return this.cartItems.length;
  }

 /* getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }*/

  convertPrice(priceString: string): number {
    // Retirer tout ce qui n'est pas un chiffre ou un point (pour les décimales)
    const numberString = priceString.replace(/[^0-9.]/g, '');
    // Convertir la chaîne de caractères en nombre
    return parseFloat(numberString);
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

 /* removeFromCart(itemId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
  }*/

  clearCart(){
    this.cartItems = [];
  }
  
}
