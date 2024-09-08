import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: any[] =[
    { id: 1, img: 'assets/image/Tomate2.jpg', title: 'Tomate', subtitle: 'Subtitle 1', content: 'Le garder dans un endroit frais, sec, et à l’abri de la lumière.', price: 7000  },
    { id: 2, img: 'assets/image/Fraise5.jpg', title: 'Fraise', subtitle: 'Subtitle 2', content: 'Jus pressé de fraise', price: 5000 },
    { id: 4, img: 'assets/image/CitronVert.jpg', title: 'Citron ', subtitle: 'Subtitle 3', content: 'Une fois coupé ou cuit il perd progressivement ses vitamines.', price: 3000 },
    { id: 3, img: 'assets/image/Ananas.jpg', title: 'Ananas', subtitle: 'Subtitle 3', content: 'Sensible au froid (-7°C) et aux chocs Pour accélérer sa maturité, enveloppez-le dans du papier kraft', price: 2500},

  ]
  constructor() { }
}
