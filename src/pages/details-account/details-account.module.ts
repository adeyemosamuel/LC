import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsAccountPage } from './details-account';

@NgModule({
  declarations: [
    DetailsAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsAccountPage),
  ],
})
export class DetailsAccountPageModule {}
