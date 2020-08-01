import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule} from 'br-mask';

import { IonicModule } from '@ionic/angular';

import { ComentsPageRoutingModule } from './coments-routing.module';

import { ComentsPage } from './coments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComentsPageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  declarations: [ComentsPage]
})
export class ComentsPageModule {}
