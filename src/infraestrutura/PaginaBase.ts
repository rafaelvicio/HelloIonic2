import { FormBuilder} from '@angular/forms';
import { AlertController, LoadingController, ToastController } from 'ionic-angular';
import { ConfiguracaoPagianBase } from '../infraestrutura/ConfiguragaoPaginaBase';

export abstract class PaginaBase{

  protected _formBuilder?: FormBuilder;
  protected _alertCtrl?: AlertController;

  constructor (cpb: ConfiguracaoPagianBase){
    this._formBuilder = cpb.formBuilder;
    this._alertCtrl = cpb.alertCtrl;
    this.carregarValidores();
  }

  protected carregarValidores(): void {
    if(this._formBuilder != null){
      this.docarregarValidores();
    }
  }

  protected docarregarValidores(): void{

  }

  protected mostrarMensagemErro(mensagem: string){
    if(this._alertCtrl != null){
      let alert = this._alertCtrl.create({
        title: "Erro",
        subTitle: "mensagem",
        buttons: ["Ok"]
      });
      alert.present();
    }
  }

}
