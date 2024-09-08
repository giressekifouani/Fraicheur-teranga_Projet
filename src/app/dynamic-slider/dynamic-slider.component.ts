import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-dynamic-slider',
  templateUrl: './dynamic-slider.component.html',
  styleUrls: ['./dynamic-slider.component.scss'],
})
export class DynamicSliderComponent  implements OnInit {
 // @ViewChild('slides', { static: false }) slides: IonSlides;

  slides = [ 
     { id: 5, img: 'assets/image/Broccoli.jpg', title: 'Brocoli', subtitle: 'Subtitle 3', content: 'Une fois coupé ou cuit il perd progressivement ses vitamines', price: 2000 },
  { id: 6, img: 'assets/image/Melon2.jpg', title: 'Melon ', subtitle: 'Subtitle 3', content: 'Conserver dans une boîte hermétique', price: 1500 },
  { id: 7, img: 'assets/image/Frambroise.jpg', title: 'Framboise', subtitle: 'Subtitle 3', content: 'Frambroise', price: 2000 },
  { id: 8, img: 'assets/image/Mangue.jpg', title: 'Mangue', subtitle: 'Subtitle 3', content: 'Sensible au froid (-6°C). Le fruit termine très bien sa maturation à l’air libre', price: 1500 },
  { id: 9, img: 'assets/image/Fraise6.jpg', title: 'Fraise', subtitle: 'Subtitle 3', content: 'Fraise rouge', price: 1000 },
  { id: 10, img: 'assets/image/Orange.jpg', title: 'Orange', subtitle: 'Subtitle 2', content: 'Ne pas conserver dans des pièces trop chaudes car elle risque de se dessécher.', price: 5000 },
  { id: 11, img: 'assets/image/Pomplemousse.jpg', title: 'pamplemousse', subtitle: 'Subtitle 3', content: 'Consommez le fruit immédiatement une fois ouvert sans quoi la pulpe asseche', price: 2500},
]

  constructor() { }

  ngOnInit() {

  
  }

  slideOpts = {
   /* initialSlide: 1,
    speed: 400*/
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 3000, // 3 seconds
      disableOnInteraction: false
    }
  };

}
