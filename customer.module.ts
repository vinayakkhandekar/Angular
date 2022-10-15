import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerroutingModule } from './customerrouting.module';



@NgModule({
  declarations: [CustomerlistComponent],
  imports: [
    CommonModule,
    CustomerroutingModule
  ]
})
export class CustomerModule {
  constructor() {
    console.log("Customer module called");  
  }
 }
