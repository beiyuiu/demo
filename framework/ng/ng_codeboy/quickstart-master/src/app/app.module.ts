import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './utility/header/header.component';
import { FooterComponent }  from './utility/footer/footer.component';
import { NotFoundComponent }  from './utility/notFound/notfound.component';
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
import { MyHttpService } from './utility/service/myhttp.service';
import { Carousel } from './utility/carsousel/carousel.component';
import { Slide } from './utility/carsousel/slide.component';

 
@NgModule({
  providers: [MyHttpService],
  imports:      [ BrowserModule,FormsModule,AppRoutingModule,HttpModule ],
  declarations: [ 
   OrderConfirmStepOneComponent,
   OrderConfirmStepTwoComponent,
   OrderConfirmStepThreeComponent,
    Slide,
    Carousel,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    CartComponent,
    DetailComponent,
    IndexComponent,
    ListComponent,
    LoginComponent,
    OrderConfirmComponent,
    RegisterComponent,
    UserCenterComponent,
    AppComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
