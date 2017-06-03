import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesProdutosPage } from './detalhes-produtos';

@NgModule({
  declarations: [
    DetalhesProdutosPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesProdutosPage),
  ],
  exports: [
    DetalhesProdutosPage
  ]
})
export class DetalhesProdutosPageModule {}
