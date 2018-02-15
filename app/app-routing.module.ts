import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { HomeComponent } from "./home/home.component";
import { AccountComponent } from "./account/account.component";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

import { LoginFormComponent } from "./forms/login-form/login-form.component";
import { RegisterFormComponent } from "./forms/register-form/register-form.component";

const appRoutes: Routes = [
    { path: "home", component: HomeComponent },
    {
        path: "account", component: AccountComponent, children: [
            { path: '', redirectTo: 'register', pathMatch: 'full' },
            { path: 'login', component: LoginFormComponent },
            { path: 'register', component: RegisterFormComponent },
        ]
    },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id', component: ProductDetailsComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: HomeComponent }
];

const appRouter = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [appRouter]
})
export class AppRoutingModule { }