import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule} from 'br-mask';

import { IonicModule } from '@ionic/angular';

import { CadastroDormPageRoutingModule } from './cadastro-dorm-routing.module';

import { CadastroDormPage } from './cadastro-dorm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroDormPageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  declarations: [CadastroDormPage]
})
export class CadastroDormPageModule {}
