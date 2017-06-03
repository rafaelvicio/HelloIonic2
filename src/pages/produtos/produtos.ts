import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { ProdutoServiceProvider } from '../../providers/produto-service/produto-service';
import { PaginaBase } from '../../infraestrutura/PaginaBase';
import { ProdutoModel } from '../../models/ProdutoModel';
import { DetalhesProdutosPage } from '../detalhes-produtos/detalhes-produtos';

/**
 * Generated class for the ProdutosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage extends PaginaBase {

  produtos: ProdutoModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public loadingCtrl: LoadingController, public ToastCtrl: ToastController, public AlertCtrl: AlertController,
  private produtoService: ProdutoServiceProvider) {
    super({ alertCtrl: AlertCtrl, loadingCtrl: loadingCtrl, toastCtrl: ToastCtrl})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
    this.mostrarLoading('Buscando produtos...')
    this.produtoService.listaProdutos().subscribe(response => {
      this.esconderLoading();
      this.produtos = response;
    },
    erro => {
      this.esconderLoading();
      this.mostrarMensagemErro(`Erro ao buscar os produtos: ${erro}`);
    });
  }

  mostrarDetalhesProduto(produto: ProdutoModel){
    this.navCtrl.push(DetalhesProdutosPage, {
      produto: produto
    });
  }

}
