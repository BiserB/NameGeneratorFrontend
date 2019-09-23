import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AuthService } from './services/auth.service';
import { ModalService } from './services/modal.service';
import { NamesService } from './services/names.service';
import { ModalComponent } from './directives/modal/modal.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ 
    AuthService, 
    NamesService, 
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
