import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonPageComponent } from './shared/button-main-page/button-page.component';
import {FormsModule} from "@angular/forms";
import {HomepageModule} from "./pages/homepage/homepage.module";

@NgModule({
    declarations: [
        AppComponent,
        ButtonPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HomepageModule
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
