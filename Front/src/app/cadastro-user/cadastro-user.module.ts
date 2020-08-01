import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule} from 'br-mask';

import { IonicModule } from '@ionic/angular';

import { CadastroUserPageRoutingModule } from './cadastro-user-routing.module';

import { CadastroUserPage } from './cadastro-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroUserPageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  declarations: [CadastroUserPage]
})
export class CadastroUserPageModule {}
