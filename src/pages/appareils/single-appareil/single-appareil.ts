import { Component, OnInit  } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Appareil } from '../../../models/Appareils';
import { AppareilsService } from '../../../services/appareils.service';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
    selector: 'page-single-appareil',
    templateUrl: 'single-appareil.html'
})
export class SingleAppareilPage implements OnInit{

index: number;
appareil: Appareil;

    constructor(public navParams: NavParams,
                public viewCtrl: ViewController, 
                public appareilsService: AppareilsService){

    }

    ngOnInit() {
        this.index = this.navParams.get('index');
        this.appareil = this.appareilsService.appareilsList[this.index];
    }

    dismissModal(){
        this.viewCtrl.dismiss();
    }

    onToggleAppareil(){
        this.appareil.isOn = !this.appareil.isOn;
        console.log("lddsdd");
    }

    onSubmitForm(form: NgForm) {
        console.log(form.value);
        this.dismissModal();
    }
    
    onDeleteHours() {
        this.appareil.startTime = '';
        this.appareil.endTime = '';
        this.dismissModal();
    }

}