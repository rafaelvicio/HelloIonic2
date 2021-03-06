import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { IAutenticacaoService } from '../providers.interfaces/iAutenticacaoService';
import { AutenticacaoService } from '../providers/autenticacao-service/autenticacao-service';

import { HttpModule} from '@angular/http';

import { TabsPage } from '../pages/tabs/tabs';
import { ProdutosPage } from '../pages/produtos/produtos';
import { PerfilPage } from '../pages/perfil/perfil';
import { DetalhesProdutosPage } from '../pages/detalhes-produtos/detalhes-produtos';

import { NativeStorage } from '@ionic-native/native-storage';
import { ProdutoServiceProvider } from '../providers/produto-service/produto-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    ProdutosPage,
    PerfilPage,
    DetalhesProdutosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    ProdutosPage,
    PerfilPage,
    DetalhesProdutosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: 'IAutenticacaoService', useClass: AutenticacaoService},
    NativeStorage,
    ProdutoServiceProvider
  ]
})
export class AppModule {}
