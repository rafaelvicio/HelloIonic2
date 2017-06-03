import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { IProdutoService } from '../../providers.interfaces/iProdutoService';
import { Observable } from 'rxjs/Observable';
import { ProdutoModel } from '../../models/ProdutoModel';
import { HelloIonicConstantes } from '../../app/HelloIonicConstantes';

/*
  Generated class for the ProdutoServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProdutoServiceProvider implements IProdutoService {

  constructor(public http: Http) {
    console.log('Hello ProdutoServiceProvider Provider');
  }

  listaProdutos(): Observable<ProdutoModel[]>{
    return this.http.get(HelloIonicConstantes.BASE_URL + '/' + HelloIonicConstantes.Produtos.GET, {
    }).map(response => {
      let resp = response.json();
      let resultado: ProdutoModel[] = resp.data.produtos.map(function (produto,index, arr){
        let p: ProdutoModel = new ProdutoModel();
        p.id = produto.id;
        p.categoria = produto.categoria;
        p.descricao = produto.descricao;
        p.nome = produto.nome;
        p.icone = produto.categoria == 'doce' ? 'alert' : 'basket';
        return p;
      });
      return resultado;
    });
  }

}
