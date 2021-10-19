import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListuserComponent } from './listuser/listuser.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';
import { MainUserComponent } from './main-user/main-user.component';
import { AddProductTDComponent } from './add-product-td/add-product-td.component';

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    HeaderComponent,
    FooterComponent,
    MainProductComponent,
    MainProviderComponent,
    NotFoundPageComponent,
    HomeComponent,
    MainUserComponent,
    AddProductTDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
