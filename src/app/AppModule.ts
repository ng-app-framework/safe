import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {NgSafeModule} from "./NgSafeModule";

@Component({
    selector: 'app',
    template: `
        <div>It works!</div> <a [href]="url | safeUrl">Should Work</a>
    `
})
export class AppComponent {

    url = 'https://google.com';

    constructor() {

    }
}

@NgModule({
    declarations: [AppComponent],
    imports     : [
        BrowserModule,
        CommonModule,
        NgSafeModule
    ],
    exports     : [AppComponent],
    providers   : [],
    bootstrap   : [AppComponent]

})
export class AppModule {

}
