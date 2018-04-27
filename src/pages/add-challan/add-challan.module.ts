import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddChallanPage } from './add-challan';

@NgModule({
  declarations: [
    AddChallanPage,
  ],
  imports: [
    IonicPageModule.forChild(AddChallanPage),
  ],
})
export class AddChallanPageModule {}
