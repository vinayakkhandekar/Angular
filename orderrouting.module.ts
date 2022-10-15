import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrderlistComponent } from './orderlist/orderlist.component';

const routes:Routes=[
  {path:'',component:OrderlistComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
 
})
export class OrderroutingModule { }
