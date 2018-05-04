import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersoninfoComponent } from './personinfo/personinfo.component';
import { PersonInfoService } from './shared/services/personinfo-service.services';


@NgModule({
  declarations: [
    AppComponent,
    PersoninfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PersonInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
