import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-item-description-modal',
  templateUrl: './item-description-modal.page.html',
  styleUrls: ['./item-description-modal.page.scss'],
})
export class ItemDescriptionModalPage implements OnInit {
  @Input() item : any

  constructor(private crt: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.crt.dismiss();
  }

}
