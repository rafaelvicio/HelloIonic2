import { ProdutoModel } from '../models/ProdutoModel';
import { Observable } from 'rxjs/Observable';

export interface IProdutoService {

    listaProdutos(): Observable<ProdutoModel[]>;

}