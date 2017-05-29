
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { IAutenticacaoService } from '../../providers.interfaces/iAutenticacaoService';
import { LoginModel } from '../../models/LoginModel';

/*
  Generated class for the AutenticacaoServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AutenticacaoService implements IAutenticacaoService{

  constructor(public http: Http) {
    console.log('Hello AutenticacaoServiceProvider Provider');
  }

  login(LoginModel: LoginModel): boolean {
    return LoginModel.email == 'rafaelvicio@icloud.com' && LoginModel.senha == '12345';
  }

  logout(): void{

  }

}
