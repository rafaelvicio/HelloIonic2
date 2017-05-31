
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { IAutenticacaoService } from '../../providers.interfaces/iAutenticacaoService';
import { LoginModel } from '../../models/LoginModel';
import { Observable } from 'rxjs/Observable';
import { HelloIonicConstantes } from '../app/HelloIonicConstantes';

/*
  Generated class for the AutenticacaoServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AutenticacaoService implements IAutenticacaoService {

  constructor(public http: Http) {
    console.log('Hello AutenticacaoServiceProvider Provider');
  }

  login(LoginModel: LoginModel): Observable<void> {
    if (!LoginModel || !LoginModel.email || !LoginModel.senha) {
      return Observable.throw('Email e/ou senha não informados.');
    }
    let corporRequisicao = {
      email: LoginModel.email,
      senha: LoginModel.senha
    }

    return this.http.post(HelloIonicConstantes.BASE_URL + '/' + HelloIonicConstantes.Auth.LOGIN, corporRequisicao)
      .map(Response => {
        let resp = Response.json();
      });
  }

  logout(): void {

  }

}
