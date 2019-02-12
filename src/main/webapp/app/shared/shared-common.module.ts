import { NgModule } from '@angular/core';

import { NflPickEmSampleAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [NflPickEmSampleAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [NflPickEmSampleAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class NflPickEmSampleAppSharedCommonModule {}
