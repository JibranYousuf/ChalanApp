import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChallansPage } from './challans';

@NgModule({
  declarations: [
    ChallansPage,
  ],
  imports: [
    IonicPageModule.forChild(ChallansPage),
  ],
})
export class ChallansPageModule {}
