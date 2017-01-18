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

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    this.rpm = 100;
    this.par = 50;
    this.pinon = 7;
    this.corona = 22;
    this.rueda = 14;
    this.peso = 40;
  }

  calc() {
    var pi = 3.141592;
    this.transmision = this.corona / this.pinon;
    var rpmcorona = this.rpm / this.transmision;
    this.velocidad = (rpmcorona / 60) * (this.rueda * pi / 1000);
    this.vatios = (this.rpm * this.par) / 400000;
    this.rpmrueda = (this.rpm / 2) / this.transmision;
    var newtons = (30 * this.vatios) / this.rpmrueda * (this.rueda / 2000) * pi;
    this.aceleracion = (newtons) / (this.peso / 1000) * 100;
    this.round();
  }

  round() {
    this.transmision = Math.round(this.transmision * 100) / 100;
    this.velocidad = Math.round(this.velocidad * 100) / 100;
    this.vatios = Math.round(this.vatios * 100) / 100;
    this.rpmrueda = Math.round(this.rpmrueda * 100) / 100;
    this.aceleracion = Math.round(this.aceleracion * 100) / 100;
  }
}