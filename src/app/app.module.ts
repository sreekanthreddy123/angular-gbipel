
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RtlService } from '@fundamental-ngx/core/utils';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FundamentalNgxCoreModule, FdDatetimeModule } from '@fundamental-ngx/core';
import { FundamentalNgxPlatformModule } from '@fundamental-ngx/platform';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { PlatformTablePageScrollingExampleComponent } from './platform-table-page-scrolling-example.component';


@NgModule({
    declarations: [
        PlatformTablePageScrollingExampleComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FundamentalNgxCoreModule, FdDatetimeModule,
        FundamentalNgxPlatformModule,
        HttpClientModule,
        CdkTableModule,
        DragDropModule,
        RouterModule.forRoot([{path: '#', component:PlatformTablePageScrollingExampleComponent}], { useHash: true }),
    ],
    providers: [
        RtlService,
        
    ],
    entryComponents: [
        
    ],
    bootstrap: [
        PlatformTablePageScrollingExampleComponent
    ]
})
export class AppModule {}
