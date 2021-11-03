import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListuserComponent } from './listuser/listuser.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { MainUserComponent } from './main-user/main-user.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"mainUser", component: MainUserComponent, children:[
    {path:"category/:cat", component: ListuserComponent},
  ]},
  {path:"mainproduct", component: MainProductComponent},
  {path:"mainprovider", component: MainProviderComponent},
  {path:"maininvoice", component: MainInvoiceComponent},
  {path:"**", component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
