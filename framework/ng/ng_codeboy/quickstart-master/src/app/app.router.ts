/*配置路由词典*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent }  from './utility/header/header.component';
import { FooterComponent }  from './utility/footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { OrderConfirmComponent } from './orderConfirm/orderconfirm.component';
import { OrderConfirmStepOneComponent } from './orderConfirm/orderConfirmStepOne.component';
import { OrderConfirmStepTwoComponent } from './orderConfirm/orderConfirmStepTwo.component';
import { OrderConfirmStepThreeComponent } from './orderConfirm/orderConfirmStepThree.component';
import { RegisterComponent } from './register/register.component';
import { UserCenterComponent } from './usercenter/usercenter.component';
import { NotFoundComponent }  from './utility/notFound/notfound.component';


const routes: Routes = [
    { path: '', redirectTo:'/index',pathMatch:'full'},
  
  { path: 'index', component: IndexComponent,children:[
    {path: 'header',component:HeaderComponent},
    {path: 'footer',component:FooterComponent},
  ]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'list', component: ListComponent},
  { path: 'detail', component: DetailComponent},
  { path: 'cart', component: CartComponent},
  { path: 'orderconfirm', component: OrderConfirmComponent,children:[
    {path: '', redirectTo:'/orderConfirmStepOne',pathMatch:'full'},
    {path: 'orderConfirmStepOne', component: OrderConfirmStepOneComponent},
    {path: 'orderConfirmStepTwo', component: OrderConfirmStepTwoComponent},
    {path: 'orderConfirmStepThree', component: OrderConfirmStepThreeComponent}
    
  ]},
  { path: 'usercenter', component: UserCenterComponent},
  { path: '**', component: NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

