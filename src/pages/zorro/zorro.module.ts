import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZorroPageRoutingModule } from './zorro-routing.module';

import { ZorroPage } from './zorro.page';
import { ZorroHeaderComponent } from 'src/components/zorro-header/zorro-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZorroPageRoutingModule
  ],
  declarations: [
    ZorroPage,
    ZorroHeaderComponent
  ],
  entryComponents: [
    ZorroHeaderComponent
  ]
})
export class ZorroPageModule {}
