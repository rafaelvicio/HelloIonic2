import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoModel } from '../../models/ProdutoModel';

/**
 * Generated class for the DetalhesProdutosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detalhes-produtos',
  templateUrl: 'detalhes-produtos.html',
})
export class DetalhesProdutosPage {

  produto: ProdutoModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.produto = navParams.data.produto;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesProdutosPage');
  }

}
