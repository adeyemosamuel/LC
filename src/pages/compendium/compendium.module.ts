import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompendiumPage } from './compendium';

@NgModule({
  declarations: [
    CompendiumPage,
  ],
  imports: [
    IonicPageModule.forChild(CompendiumPage),
  ],
})
export class CompendiumPageModule {}
