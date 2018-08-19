import { Component } from '@angular/core';
import { NavController, ModalController, MenuController } from 'ionic-angular';
import { SingleAppareilPage } from './single-appareil/single-appareil';
import { Appareil } from '../../models/Appareils';
import { AppareilsService } from '../../services/appareils.service';
import { AppareilFormPage } from './appareil-form/appareil-form';

@Component({
    selector: 'page-appareils',
    templateUrl: 'appareils.html'
})
export class AppareilsPage{

  appareilsList: Appareil[];

    constructor(private modalCtrl: ModalController,
                private appareilsService: AppareilsService,
                private menuCtrl: MenuController,
              public navCtrl: NavController){
    }

    ionViewWillEnter(){
      this.appareilsList = this.appareilsService.appareilsList.slice()
    }
    
    onLoadAppareil(index: number){
          let modal = this.modalCtrl.create(SingleAppareilPage, {index: index})
          modal.present();
    }

    onToggleMenu(){
      this.menuCtrl.open();
    }

    onNewAppareil(){
      this.navCtrl.push(AppareilFormPage);
    }
}