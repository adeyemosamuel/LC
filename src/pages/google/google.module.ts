import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtmPage } from './google';

@NgModule({
  declarations: [
    AtmPage,
  ],
  imports: [
    IonicPageModule.forChild(AtmPage),
  ],
})
export class GooglePageModule {}
