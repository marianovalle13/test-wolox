import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { HeaderComponent } from 'src/shared/header/header.component';
import { NavComponent } from 'src/shared/nav/nav.component';
import { AsideComponent } from 'src/shared/aside/aside.component';
import { FooterComponent } from 'src/shared/footer/footer.component';
import { PrivacyPolicyComponent } from 'src/shared/privacy-policy/privacy-policy.component';
import { MainComponent } from 'src/shared/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TechnologiesComponent,
    HeaderComponent,
    NavComponent,
    AsideComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
