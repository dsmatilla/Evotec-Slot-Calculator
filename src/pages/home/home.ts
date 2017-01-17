import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rpm: any;
  par: any;
  pinon: any;
  corona: any;
  rueda: any;
  peso: any;

  transmision: any;
  velocidad: any;
  vatios: any;
  rpmrueda: any;
  aceleracion: any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}

  calc() {
    var pi = 3.141592;
    this.transmision = Math.round(this.corona / this.pinon);
    var rpmcorona = this.rpm / this.transmision;
    this.velocidad = Math.round((rpmcorona / 60) * (this.rueda * pi / 1000));
    this.vatios = Math.round((this.rpm * this.par) / 400000);
    var rpms_potencia = this.rpm / 2;
    this.rpmrueda = Math.round((this.rpm / 2) / this.transmision);
    var newtons = (30 * this.vatios) / rpms_potencia * (this.rueda / 2000) * pi;
    this.aceleracion = Math.round((newtons) / (this.peso / 1000) * 100);
  }
}