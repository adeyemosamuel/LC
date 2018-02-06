import { NgModule } from '@angular/core';

import { LgafilterPipe } from '../lgafilter/lgafilter';
import { OderbyPipe } from '../oderby/oderby';
import { RmPipe } from '../rm/rm';
import { CommaPipe } from './comma/comma';
@NgModule({
	declarations: [LgafilterPipe,
    OderbyPipe,
    RmPipe,
    CommaPipe],
	imports: [],
	exports: [LgafilterPipe,
    OderbyPipe,
    RmPipe,
    CommaPipe]
})
export class PipesModule {}
