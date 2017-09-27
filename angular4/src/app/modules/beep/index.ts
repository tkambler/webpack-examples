import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BoopComponent } from './components/boop';

@NgModule({
    'declarations': [
        BoopComponent
    ],
    'imports': [
        BrowserModule
    ],
    'exports': [
        BoopComponent
    ],
    'providers': []
})
export class BeepModule { }
