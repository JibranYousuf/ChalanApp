import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitizenProfilePage } from './citizen-profile';

@NgModule({
  declarations: [
    CitizenProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(CitizenProfilePage),
  ],
})
export class CitizenProfilePageModule {}
