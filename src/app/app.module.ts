import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './modules/spinner/spinner.component';
import { AppSpinnerDirective } from './shared/directive/app-spinner.directive';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    AppSpinnerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
