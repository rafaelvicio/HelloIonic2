import { FormBuilder} from '@angular/forms';
import { ConfiguracaoPagianBase } from '../infraestrutura/ConfiguragaoPaginaBase';
import { AlertController, LoadingController, Loading, ToastController, Toast } from 'ionic-angular';

export abstract class PaginaBase{

  protected _formBuilder?: FormBuilder;
  protected _alertCtrl?: AlertController;
  protected _loadCtrl?: LoadingController;
  protected _loading: Loading;
  protected _toastCtrl?: ToastController;
  protected _toast: Toast;

  constructor (cpb: ConfiguracaoPagianBase){
    this._formBuilder = cpb.formBuilder;
    this._alertCtrl = cpb.alertCtrl;
    this._loadCtrl = cpb.loadingCtrl;
    this._toastCtrl = cpb.toastCtrl;
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

  protected mostrarLoading(mensagem: string, duracao: number = 0){
    if(duracao == 0){
      this._loading = this._loadCtrl.create({
        content: mensagem
      });
    } else {
      this._loading = this._loadCtrl.create({
        duration: duracao,
        content: mensagem
      });
    }

    this._loading.present();
  }

  protected esconderLoading(): void{
    if(this._loading != null){
      this._loading.dismiss();
    }
  }

  protected mostrarToast(mensagem: string){
    this._toast = this._toastCtrl.create({
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    this._toast.setMessage(mensagem);
    this._toast.present();
  }

  protected esconderToast(){
    if(this._toast != null){
      this._toast.dismiss();
    }
  }

}
