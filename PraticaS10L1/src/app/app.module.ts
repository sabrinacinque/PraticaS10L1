import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { FormComponent } from './components/form/form.component';
import { RandomBackGroundDirective } from './direttive/random-back-ground.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Page404Component,
    SinglePostComponent,
    FormComponent,
    RandomBackGroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
