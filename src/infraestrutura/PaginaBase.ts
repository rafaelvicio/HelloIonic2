import { FormBuilder} from '@angular/forms';

import { ConfiguracaoPagianBase } from '../infraestrutura/ConfiguragaoPaginaBase';

export abstract class PaginaBase{

  protected _formBuilder?: FormBuilder;

  constructor (cpb: ConfiguracaoPagianBase){
    this._formBuilder = cpb.formBuilder;
    this.carregarValidores();
  }

  protected carregarValidores(): void {
    if(this._formBuilder != null){
      this.docarregarValidores();
    }
  }

  protected docarregarValidores(): void{

  }

}
