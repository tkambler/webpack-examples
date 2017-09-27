import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app';
import { FooComponent } from './components/foo';
import { PersonComponent } from './components/person';
import { BeepModule } from 'app/modules/beep';

@NgModule({
    'declarations': [
        AppComponent,
        FooComponent,
        PersonComponent
    ],
    'imports': [
        BrowserModule,
        BeepModule
    ],
    'providers': [
    ],
    'bootstrap': [
        AppComponent
    ]
})
export class AppModule { }
