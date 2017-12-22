import { NgModule } from '@angular/core';

import { LgafilterPipe } from '../lgafilter/lgafilter';
import { OderbyPipe } from '../oderby/oderby';
import { RmPipe } from '../rm/rm';
@NgModule({
	declarations: [LgafilterPipe,
    OderbyPipe,
    RmPipe],
	imports: [],
	exports: [LgafilterPipe,
    OderbyPipe,
    RmPipe]
})
export class PipesModule {}
