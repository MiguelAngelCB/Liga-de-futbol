import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CronologiaPageRoutingModule } from './cronologia-routing.module';

import { CronologiaPage } from './cronologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CronologiaPageRoutingModule
  ],
  declarations: [CronologiaPage]
})
export class CronologiaPageModule {}
