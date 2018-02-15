import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { CountriesService } from './shared/services/countries.service';
import { HttpClientModule } from '@angular/common/http';
import { CountryInfoComponent } from './countries/country-info/country-info.component';
import { AccountComponent } from './account/account.component';
import { ProductsComponent } from './products/products.component';
import { MyCartComponent } from './my-cart/my-cart.component'
import { StoreFactory } from './shared/factories/store-factory';
import { AddressFormatPipe } from './shared/pipes/address-format.pipe';
import { FooterComponent } from './footer/footer.component';
import { productComponent } from './Product-preview/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BooksService } from './shared/services/books.service';
import { MainComponent } from './main/main.component';
import { RouterModule } from "@angular/router";

//custom Modules
import { AppRoutingModule } from './app-routing.module';
import { PreviewTextPipe } from './shared/pipes/preview-text.pipe';
import { ProductPriceDirective } from './shared/directives/product-price.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterFormComponent,
    LoginFormComponent,
    CountryInfoComponent,
    AccountComponent,
    ProductsComponent,
    MyCartComponent,
    AddressFormatPipe,
    FooterComponent,
    productComponent,
    MainComponent,
    ProductDetailsComponent,
    PreviewTextPipe,
    ProductPriceDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [CountriesService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
