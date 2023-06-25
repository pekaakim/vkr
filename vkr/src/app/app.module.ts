import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* import { StickyNavModule } from 'ng2-sticky-nav'; */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChipsModule } from "primeng/chips";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { MessageService } from "primeng/api";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ChipsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    InputTextModule,


  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
