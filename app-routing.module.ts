import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { ProductsComponent } from './products/products.component';
import { TvComponent } from './products/tv/tv.component';
import { WashingmachineComponent } from './products/washingmachine/washingmachine.component';


const routes: Routes = [{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login', component: LoginComponent },
  { path:'home', component: HomeComponent }, // localhost:4200
  { path: 'aboutus', component: AboutusComponent }, // localhost:4200/aboutus
  {path: 'contactus', component: ContactusComponent},
 {path:'products',loadChildren:"./products/product.module#ProductModule"},
 {path:'order',loadChildren:"./order/order.module#OrderModule"},
 {path:'customer',loadChildren:"./customer/customer.module#CustomerModule"},
  {path:'**',component:PagenotfoundComponent} // localhost:4200/contactus
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
