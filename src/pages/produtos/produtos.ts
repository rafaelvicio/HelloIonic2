import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, ActionSheetController } from 'ionic-angular';
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
  produtosFiltrados: ProdutoModel[];
  termoPesquisa: string;
  filtradoPorCategoria: boolean;
  categoriaSelecionada: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public loadingCtrl: LoadingController, public ToastCtrl: ToastController, public AlertCtrl: AlertController,
  private produtoService: ProdutoServiceProvider, public ActionSheetCtrl: ActionSheetController) {
    super({ alertCtrl: AlertCtrl, loadingCtrl: loadingCtrl, toastCtrl: ToastCtrl})
    this.termoPesquisa = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
    this.mostrarLoading('Buscando produtos...')
    this.produtoService.listaProdutos().subscribe(response => {
      this.esconderLoading();
      this.produtos = response;
      this.produtosFiltrados = response;
      this.filtradoPorCategoria = false;
      this.categoriaSelecionada = '';
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

  filtrarProdutosPorNome(): void {
    if(!this.filtradoPorCategoria){
      if(this.termoPesquisa == ''){
      this.produtosFiltrados = this.produtos;
    } else {
      this.produtosFiltrados = this.produtos.filter((produto) => {
        return produto.nome.toLowerCase().indexOf(this.termoPesquisa.toLowerCase()) > -1;
      })
    }
    } else {
      if(this.termoPesquisa == ''){
      this.produtosFiltrados = this.produtos.filter((produto) => {
        produto.categoria == this.categoriaSelecionada;
      });
    } else {
      this.produtosFiltrados = this.produtos.filter((produto) => {
        return produto.nome.toLowerCase().indexOf(this.termoPesquisa.toLowerCase()) > -1 &&
                produto.categoria == this.categoriaSelecionada;
      })
    }
    }
    
  }

  filtrarPorCategoria(): void {
    this.termoPesquisa = '';
    let actionSheet = this.ActionSheetCtrl.create({
      title: 'Filtro por categoria',
      buttons: [
        {
          text: 'Doces',
          handler: () => {
            this.categoriaSelecionada == 'doce';
            this.filtradoPorCategoria = true;
            this.produtosFiltrados = this.produtos.filter((produto) => {
              return produto.categoria = 'doce';
            })
          }
        },
        {
          text: 'Salgado',
          handler: () => {
            this.categoriaSelecionada == 'salgado';
            this.filtradoPorCategoria = true;
            this.produtosFiltrados = this.produtos.filter((produto) => {
              return produto.categoria = 'salgado';
            })
          }
        },
        {
          text: '(Todas)',
          role: 'cancel',
          handler: () => {
            this.categoriaSelecionada == '';
            this.filtradoPorCategoria = false;
            this.termoPesquisa = '';
            this.produtosFiltrados = this.produtos
          }
        }
      ]
    });
    actionSheet.present();
  }

  atualizarListaProdutos(refresher): void {
    this.produtoService.listaProdutos().subscribe(data => {
      this.produtos = data;
      this.produtosFiltrados = data;
      this.termoPesquisa = '';
      this.filtradoPorCategoria = false;
      this.categoriaSelecionada = '';
      refresher.complete();
    },
    (erro) => {
      refresher.complete();
      this.mostrarMensagemErro(erro);
    });
  }


}
