import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewComponent } from './components/new/new.component';
import { SlideComponent } from './components/slide/slide.component';


@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        NewComponent,
        SlideComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
