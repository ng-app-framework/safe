import {NgModule} from '@angular/core';
import {SafeHtmlPipe} from "./Pipe/SafeHtmlPipe";
import {SafeUrlPipe} from "./Pipe/SafeUrlPipe";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    declarations: [
        SafeHtmlPipe,
        SafeUrlPipe
    ],
    imports: [
        BrowserModule
    ],
    exports     : [
        SafeHtmlPipe,
        SafeUrlPipe
    ]
})
export class NgSafeModule {


}

