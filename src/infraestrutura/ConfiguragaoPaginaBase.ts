import { FormBuilder} from '@angular/forms';
import { AlertController, LoadingController, ToastController } from 'ionic-angular';

export interface ConfiguracaoPagianBase {

  formBuilder?: FormBuilder;
  alertCtrl?: AlertController;
  LoadingController?: LoadingController;
  ToastController?: ToastController;

}
